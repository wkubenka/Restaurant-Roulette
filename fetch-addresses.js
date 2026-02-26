#!/usr/bin/env node

/**
 * Scrapes Google Maps for restaurant addresses using Puppeteer.
 *
 * Usage:
 *   npm install puppeteer  (first time only)
 *   node fetch-addresses.js            # run all
 *   node fetch-addresses.js --dry-run  # test with first 3 restaurants
 *
 * Saves progress to addresses-cache.json so it can resume if interrupted.
 */

const fs = require("fs");
const path = require("path");

const RESTAURANTS_FILE = path.join(__dirname, "restaurants.js");
const CACHE_FILE = path.join(__dirname, "addresses-cache.json");
const SEARCH_SUFFIX = "Downtown Phoenix AZ";
const DELAY_MS = 3000; // delay between searches to avoid rate limiting

// Google Maps prefixes addresses with a map pin emoji — strip it and any
// other leading non-ASCII / whitespace so we get a clean street address.
function cleanAddress(raw) {
  if (!raw) return raw;
  return raw.replace(/^[^0-9]+/, "").trim();
}

function loadRestaurants() {
  const content = fs.readFileSync(RESTAURANTS_FILE, "utf8");
  const fn = new Function(content + "; return RESTAURANTS;");
  return fn();
}

function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  }
  return {};
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function writeRestaurantsFile(restaurants) {
  const lines = restaurants.map((r) => {
    const parts = [`name: ${JSON.stringify(r.name)}`];
    parts.push(`cuisine: ${JSON.stringify(r.cuisine)}`);
    if (r.address) parts.push(`address: ${JSON.stringify(r.address)}`);
    if (r.description) parts.push(`description: ${JSON.stringify(r.description)}`);
    return `  { ${parts.join(", ")} }`;
  });

  const content = `const RESTAURANTS = [\n${lines.join(",\n")}\n];\n`;
  fs.writeFileSync(RESTAURANTS_FILE, content);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeAddress(page, restaurantName) {
  const query = `${restaurantName} ${SEARCH_SUFFIX}`;
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;

  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

  // Wait a moment for results to render
  await sleep(2000);

  // If Maps redirected directly to a place page, grab the address from there.
  // Otherwise click the first result and then grab the address.
  let address = null;

  // Try to get address from the place detail panel
  address = await page.evaluate(() => {
    // Look for the address button/element in the place details
    const addressEl = document.querySelector('button[data-item-id="address"]');
    if (addressEl) {
      const text = addressEl.textContent.trim();
      return text || null;
    }

    // Alternative: look for aria-label containing address info
    const els = document.querySelectorAll('[data-item-id="address"]');
    for (const el of els) {
      const label = el.getAttribute("aria-label");
      if (label) return label.replace(/^Address:\s*/i, "");
    }

    return null;
  });

  if (address) return cleanAddress(address);

  // If we landed on a search results list, click the first result
  const clicked = await page.evaluate(() => {
    const results = document.querySelectorAll('a[href*="/maps/place/"]');
    if (results.length > 0) {
      results[0].click();
      return true;
    }
    return false;
  });

  if (clicked) {
    await sleep(3000);

    address = await page.evaluate(() => {
      const addressEl = document.querySelector('button[data-item-id="address"]');
      if (addressEl) {
        const text = addressEl.textContent.trim();
        return text || null;
      }
      const els = document.querySelectorAll('[data-item-id="address"]');
      for (const el of els) {
        const label = el.getAttribute("aria-label");
        if (label) return label.replace(/^Address:\s*/i, "");
      }
      return null;
    });
  }

  return cleanAddress(address);
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const puppeteer = require("puppeteer");

  const restaurants = loadRestaurants();
  const cache = loadCache();

  const toProcess = dryRun ? restaurants.slice(0, 3) : restaurants;
  const total = toProcess.length;

  console.log(`Found ${restaurants.length} restaurants, processing ${total}`);
  console.log(`Cache has ${Object.keys(cache).length} entries\n`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  let found = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < total; i++) {
    const r = toProcess[i];

    // Skip if already cached
    if (cache[r.name]) {
      console.log(`[${i + 1}/${total}] CACHED: ${r.name} → ${cache[r.name]}`);
      skipped++;
      continue;
    }

    console.log(`[${i + 1}/${total}] Searching: ${r.name}...`);

    try {
      const address = await scrapeAddress(page, r.name);

      if (address) {
        cache[r.name] = address;
        saveCache(cache);
        console.log(`  ✓ Found: ${address}`);
        found++;
      } else {
        cache[r.name] = null;
        saveCache(cache);
        console.log(`  ✗ No address found`);
        failed++;
      }
    } catch (err) {
      console.log(`  ✗ Error: ${err.message}`);
      failed++;
    }

    // Rate limit
    if (i < total - 1) {
      await sleep(DELAY_MS);
    }
  }

  await browser.close();

  // Apply cached addresses to restaurants
  for (const r of restaurants) {
    if (cache[r.name] && cache[r.name] !== null) {
      r.address = cache[r.name];
    }
  }

  writeRestaurantsFile(restaurants);

  console.log(`\nDone!`);
  console.log(`  Found: ${found}`);
  console.log(`  Cached/skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log(`\nrestaurants.js has been updated.`);
  console.log(`Cache saved to addresses-cache.json for future runs.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
