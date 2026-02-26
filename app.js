(function () {
  const nameEl = document.getElementById("restaurant-name");
  const cuisineEl = document.getElementById("restaurant-cuisine");
  const addressEl = document.getElementById("restaurant-address");
  const descriptionEl = document.getElementById("restaurant-description");
  const card = document.getElementById("result-card");
  const btn = document.getElementById("spin-btn");
  const countEl = document.getElementById("count");

  countEl.textContent = RESTAURANTS.length;

  let lastIndex = -1;

  function pickRandom() {
    if (RESTAURANTS.length === 0) return null;
    if (RESTAURANTS.length === 1) return RESTAURANTS[0];

    let index;
    do {
      index = Math.floor(Math.random() * RESTAURANTS.length);
    } while (index === lastIndex);

    lastIndex = index;
    return RESTAURANTS[index];
  }

  function showRestaurant(restaurant) {
    nameEl.textContent = restaurant.name;
    nameEl.classList.remove("placeholder-text");
    cuisineEl.textContent = restaurant.cuisine;
    addressEl.textContent = restaurant.address;
    descriptionEl.textContent = restaurant.description;

    card.classList.add("reveal");
    setTimeout(function () {
      card.classList.remove("reveal");
    }, 400);
  }

  function spin() {
    btn.disabled = true;
    btn.classList.add("spinning");

    var shuffleCount = 0;
    var totalShuffles = 12;

    var interval = setInterval(function () {
      var random = RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)];
      nameEl.textContent = random.name;
      nameEl.classList.remove("placeholder-text");
      cuisineEl.textContent = random.cuisine;
      addressEl.textContent = "";
      descriptionEl.textContent = "";

      shuffleCount++;
      if (shuffleCount >= totalShuffles) {
        clearInterval(interval);
        var winner = pickRandom();
        showRestaurant(winner);
        btn.disabled = false;
        btn.classList.remove("spinning");
        btn.textContent = "Spin Again";
      }
    }, 100);
  }

  btn.addEventListener("click", spin);
})();
