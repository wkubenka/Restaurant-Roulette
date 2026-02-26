// Restaurant data scraped from https://dtphx.org/things-to-do/eat-drink
// Source: Downtown Phoenix Inc. (dtphx.org)
const RESTAURANTS = [
  {
    name: "Pizzeria Bianco @ The Square PHX",
    cuisine: "Italian / Pizza",
    address: "623 E Adams St, Phoenix, AZ 85004",
    description: "James Beard Award-winning wood-fired pizzas with locally sourced ingredients in historic Heritage Square."
  },
  {
    name: "Bar Bianco @ The Square PHX",
    cuisine: "Wine Bar",
    address: "609 E Adams St, Phoenix, AZ 85004",
    description: "Intimate wine bar adjacent to Pizzeria Bianco, offering wine, antipasti, and a beautiful patio."
  },
  {
    name: "LATHA Restaurant & Bar",
    cuisine: "African",
    address: "628 E Adams St, Phoenix, AZ 85004",
    description: "Pan-African immersive dining with contemporary seasonal dishes based on historical recipes from Africa, the Caribbean, Brazil, and the southern U.S."
  },
  {
    name: "Stemistry",
    cuisine: "Cafe / Floral",
    address: "618 E Adams St, Phoenix, AZ 85004",
    description: "Unique flower bar and cafe offering botanical-inspired drinks, coffee, and floral arrangements."
  },
  {
    name: "Adams Table Patio & Bar @ Hyatt Place",
    cuisine: "American",
    address: "150 W Adams St, Phoenix, AZ 85003",
    description: "Hotel restaurant with a relaxed patio atmosphere serving American cuisine and craft cocktails."
  },
  {
    name: "Thai Basil Signature",
    cuisine: "Asian / Thai",
    address: "114 W Adams St, Phoenix, AZ 85003",
    description: "Authentic Thai cuisine featuring signature curries, noodles, and stir-fry dishes."
  },
  {
    name: "Sweet Crimes Candy Vault",
    cuisine: "Dessert",
    address: "114 W Adams St, Phoenix, AZ 85003",
    description: "Candy shop and dessert destination with a vault of sweet treats and confections."
  },
  {
    name: "Paradise Hawaiian BBQ",
    cuisine: "Hawaiian / BBQ",
    address: "18 W Adams St, Phoenix, AZ 85003",
    description: "Hawaiian-style plate lunches and BBQ with island flavors in downtown Phoenix."
  },
  {
    name: "The Arrogant Butcher",
    cuisine: "American / Steakhouse",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Modern American grill with prime steaks and an energetic downtown atmosphere at CityScape."
  },
  {
    name: "Bitter & Twisted Cocktail Parlour",
    cuisine: "Cocktail Bar / Small Plates",
    address: "1 W Jefferson St, Phoenix, AZ 85003",
    description: "Award-winning cocktail bar in a historic Prohibition-era building with creative bites."
  },
  {
    name: "Blue Hound Kitchen & Cocktails",
    cuisine: "American",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Upscale restaurant at Hotel Palomar known for craft cocktails and phenomenal brunch."
  },
  {
    name: "Breakfast Club",
    cuisine: "Breakfast & Brunch",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Popular breakfast and brunch spot at CityScape serving classic morning favorites."
  },
  {
    name: "Rosso Italian",
    cuisine: "Italian",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Italian restaurant at CityScape offering pasta, pizza, and Italian-American classics."
  },
  {
    name: "Obon",
    cuisine: "Asian / Japanese",
    address: "2 E Jefferson St #108, Phoenix, AZ 85004",
    description: "Japanese-inspired sushi and ramen bar at CityScape with creative cocktails and brunch."
  },
  {
    name: "Humble Bistro",
    cuisine: "International",
    address: "222 E Jefferson St, Phoenix, AZ 85004",
    description: "Eclectic international fare with a moody ambiance and a melting pot of flavors."
  },
  {
    name: "Monroe's Hot Chicken",
    cuisine: "American / Chicken",
    address: "45 W Jefferson St, Phoenix, AZ 85003",
    description: "Nashville-style hot chicken from restaurateur Larry 'Lo-Lo' White."
  },
  {
    name: "Casa de Julia",
    cuisine: "Mexican",
    address: "45 W Jefferson St, Phoenix, AZ 85003",
    description: "Honors Mexico's rich culinary heritage in the historic Luhrs building, founded by Yasmine Rubio."
  },
  {
    name: "Chico Malo",
    cuisine: "Mexican",
    address: "50 W Jefferson St, Phoenix, AZ 85003",
    description: "Upscale Mexican restaurant great for brunch, founded by Teddy and Katie Myers."
  },
  {
    name: "Copper Blues Rock Pub & Kitchen",
    cuisine: "American / Pub",
    address: "50 W Jefferson St, Phoenix, AZ 85003",
    description: "Live music venue and rock pub with craft beer and a full menu of American fare."
  },
  {
    name: "Bad Ass Coffee of Hawaii",
    cuisine: "Cafe / Coffee",
    address: "50 W Jefferson St, Phoenix, AZ 85003",
    description: "Hawaiian-themed coffee shop serving 100% Kona and Hawaiian blend coffees."
  },
  {
    name: "810 Entertainment",
    cuisine: "American / Entertainment",
    address: "50 W Jefferson St, Phoenix, AZ 85003",
    description: "Billiards, bowling, and dining entertainment venue with a full bar and American menu."
  },
  {
    name: "Stadium Sports Bar & Lounge",
    cuisine: "American / Sports Bar",
    address: "50 W Jefferson St, Phoenix, AZ 85003",
    description: "Sports bar with big screens, pub food, and cocktails in the heart of downtown."
  },
  {
    name: "Crown Public House",
    cuisine: "American / Pub",
    address: "333 E Jefferson St, Phoenix, AZ 85004",
    description: "Classic pub serving craft beers and hearty American pub food near Chase Field."
  },
  {
    name: "Willie's Taco Joint",
    cuisine: "Mexican / Tacos",
    address: "333 E Jefferson St, Phoenix, AZ 85004",
    description: "Casual taco joint offering street-style tacos and Mexican favorites near Chase Field."
  },
  {
    name: "Cold Beer & Cheeseburgers",
    cuisine: "American / Burgers",
    address: "401 E Jefferson St, Phoenix, AZ 85004",
    description: "No-frills burger bar focused on craft beers and gourmet cheeseburgers."
  },
  {
    name: "Someburros @ Chase Field",
    cuisine: "Mexican / Fast-Casual",
    address: "401 E Jefferson St, Phoenix, AZ 85004",
    description: "Family-owned fast-casual Mexican restaurant with Sonoran-style burros, tacos, and mini chimis."
  },
  {
    name: "Blanco Tacos + Tequila",
    cuisine: "Mexican",
    address: "123 E Washington St, Phoenix, AZ 85004",
    description: "Upscale taqueria serving modern Mexican dishes with a premium tequila selection."
  },
  {
    name: "Potbelly Sandwich Shop",
    cuisine: "American / Fast-Casual",
    address: "1 E Washington St, Phoenix, AZ 85004",
    description: "Fast-casual sandwich shop known for toasted subs and hand-dipped shakes at CityScape."
  },
  {
    name: "Dog Haus Biergarten",
    cuisine: "American / Hot Dogs",
    address: "1 E Washington St, Phoenix, AZ 85004",
    description: "Gourmet hot dogs, sausages, and burgers on King's Hawaiian rolls with craft beer."
  },
  {
    name: "Pigtails",
    cuisine: "American",
    address: "1 E Washington St, Phoenix, AZ 85004",
    description: "Playful eatery at CityScape offering creative comfort food and cocktails."
  },
  {
    name: "Coabana",
    cuisine: "Latin / Cuban",
    address: "1 E Washington St, Phoenix, AZ 85004",
    description: "Cuban-inspired cocktails and tapas lounge evoking tropical vibes of Miami's Little Havana."
  },
  {
    name: "Insomnia Cookies",
    cuisine: "Dessert / Bakery",
    address: "1 E Washington St, Phoenix, AZ 85004",
    description: "Late-night cookie delivery and bakery with warm, fresh-baked cookies and ice cream."
  },
  {
    name: "The Whining Pig",
    cuisine: "Wine Bar",
    address: "201 E Washington St, Phoenix, AZ 85004",
    description: "Casual wine bar with a rotating selection of wines by the glass and charcuterie boards."
  },
  {
    name: "Midwest Wings XL",
    cuisine: "American / Wings",
    address: "201 E Washington St, Phoenix, AZ 85004",
    description: "Wings restaurant serving jumbo chicken wings with a variety of signature sauces."
  },
  {
    name: "Taco Bell Cantina",
    cuisine: "Mexican / Fast-Casual",
    address: "201 E Washington St, Phoenix, AZ 85004",
    description: "Upscale Taco Bell concept with an urban vibe, alcoholic beverages, and a DJ booth."
  },
  {
    name: "Mancuso's Restaurant",
    cuisine: "Italian",
    address: "201 E Washington St, Phoenix, AZ 85004",
    description: "Italian restaurant offering classic pasta, seafood, and traditional Italian dishes."
  },
  {
    name: "Pa'La Wood-Fired Cooking",
    cuisine: "Mediterranean / Italian",
    address: "132 E Washington St, Phoenix, AZ 85004",
    description: "Wood-fired Mediterranean and Italian dishes with fresh, locally sourced ingredients."
  },
  {
    name: "Nick the Greek",
    cuisine: "Mediterranean / Greek",
    address: "11 W Washington St, Phoenix, AZ 85003",
    description: "Fresh Greek and Mediterranean cuisine including gyros, souvlaki, and falafel."
  },
  {
    name: "Ingo's Tasty Food",
    cuisine: "American",
    address: "101 E Washington St, Phoenix, AZ 85004",
    description: "Eclectic American eatery with globally inspired comfort food and a fun atmosphere."
  },
  {
    name: "The Desmond Spirits & Oven",
    cuisine: "Italian / Cocktail Bar",
    address: "1 N 1st St, Phoenix, AZ 85004",
    description: "Italian-inspired restaurant with handcrafted cocktails and wood-fired dishes."
  },
  {
    name: "The Kettle Black Kitchen & Pub",
    cuisine: "American / Pub",
    address: "1 N 1st St, Phoenix, AZ 85004",
    description: "Neighborhood pub serving elevated comfort food, craft cocktails, and local brews."
  },
  {
    name: "Morning Squeeze",
    cuisine: "Breakfast & Brunch",
    address: "1 N 1st St, Phoenix, AZ 85004",
    description: "Popular brunch spot known for mimosa flights, avocado toast, and creative breakfast dishes."
  },
  {
    name: "Cartel Coffee Lab",
    cuisine: "Cafe / Coffee",
    address: "1 N 1st St, Phoenix, AZ 85004",
    description: "Craft coffee roasters with meticulously prepared espresso and pour-over drinks."
  },
  {
    name: "Hanny's",
    cuisine: "American / Gastropub",
    address: "40 N 1st St, Phoenix, AZ 85004",
    description: "Trendy gastropub in a converted 1940s department store with pizzas and cocktails."
  },
  {
    name: "Dust Cutter @ Renaissance Hotel",
    cuisine: "American / Cocktail Bar",
    address: "100 N 1st St, Phoenix, AZ 85004",
    description: "Western-chic cocktail bar and restaurant at the Renaissance Hotel with inventive drinks."
  },
  {
    name: "Chambers Bohemian Whiskey Lounge & Kitchen",
    cuisine: "American / Whiskey Bar",
    address: "705 N 1st St, Phoenix, AZ 85004",
    description: "Bohemian whiskey lounge offering an extensive whiskey selection and eclectic cuisine."
  },
  {
    name: "Crybaby",
    cuisine: "Bar / Nightlife",
    address: "818 N 1st St, Phoenix, AZ 85004",
    description: "Downtown sports bar and club mashup adjacent to The Churchill, serving drinks and vibes."
  },
  {
    name: "The Churchill",
    cuisine: "Food Hall / Various",
    address: "901 N 1st St, Phoenix, AZ 85004",
    description: "Shipping-container food hall in Roosevelt Row with local vendors, cocktails, and outdoor seating."
  },
  {
    name: "Wren & Wolf",
    cuisine: "American",
    address: "2 N Central Ave, Phoenix, AZ 85004",
    description: "Neighborhood restaurant and bar from Kaitlin and Teddy Myers with creative New American fare."
  },
  {
    name: "Carry On",
    cuisine: "Cocktail Bar",
    address: "2 N Central Ave, Phoenix, AZ 85004",
    description: "Inventive cocktail bar with a travel-inspired theme and carefully crafted drinks."
  },
  {
    name: "Céntrico @ Hotel San Carlos",
    cuisine: "Mexican / Oaxacan",
    address: "202 N Central Ave, Phoenix, AZ 85004",
    description: "Pete Salaz's bar knowledge meets Edson Madrigal's Oaxacan family recipes on the ground floor of Hotel San Carlos."
  },
  {
    name: "Condesa",
    cuisine: "Mexican",
    address: "130 N Central Ave, Phoenix, AZ 85004",
    description: "Authentic homemade Mexican cuisine serving brunch, lunch, dinner, happy hour, and late night eats."
  },
  {
    name: "The Thread Cafecito",
    cuisine: "Cafe / Cuban Coffee",
    address: "130 N Central Ave, Phoenix, AZ 85004",
    description: "Cuban coffee spot offering delicious cafe con leche, fresh baked goods, and lunch options."
  },
  {
    name: "Arizona Deli Company",
    cuisine: "Deli / American",
    address: "1 N Central Ave, Phoenix, AZ 85004",
    description: "Downtown deli serving fresh sandwiches, soups, and salads for the lunch crowd."
  },
  {
    name: "City Cafe - ASU Downtown",
    cuisine: "Cafe",
    address: "411 N Central Ave, Phoenix, AZ 85004",
    description: "Campus cafe serving coffee, quick bites, and light fare at ASU's downtown campus."
  },
  {
    name: "Rush Bowls",
    cuisine: "Healthy / Fast-Casual",
    address: "555 N Central Ave, Phoenix, AZ 85004",
    description: "Fresh acai bowls, smoothie bowls, and blended fruit drinks with healthy toppings."
  },
  {
    name: "Taste Budzz",
    cuisine: "Mediterranean",
    address: "555 N Central Ave, Phoenix, AZ 85004",
    description: "Mediterranean-inspired healthy eats with fresh bowls and wraps."
  },
  {
    name: "Bowl of Greens",
    cuisine: "Mediterranean / Healthy",
    address: "555 N Central Ave, Phoenix, AZ 85004",
    description: "Fast-casual Mediterranean restaurant with salads, bowls, and wraps."
  },
  {
    name: "Boba Cucue Bubble Tea Cafe",
    cuisine: "Cafe / Bubble Tea",
    address: "555 N Central Ave, Phoenix, AZ 85004",
    description: "Bubble tea cafe offering a variety of boba drinks, fruit teas, and milk teas."
  },
  {
    name: "Central Records Hi-Fi Cafe",
    cuisine: "Cafe / Coffee",
    address: "824 N Central Ave, Phoenix, AZ 85004",
    description: "Vinyl record shop and cafe combining curated music with specialty coffee drinks."
  },
  {
    name: "MATCH Market & Bar @ FOUND:RE Hotel",
    cuisine: "Mediterranean / American",
    address: "1100 N Central Ave, Phoenix, AZ 85004",
    description: "Modern restaurant in FOUND:RE Phoenix Hotel with wood-fired Mediterranean fare and seasonal ingredients."
  },
  {
    name: "Golden Oak Barbecue & Taproom",
    cuisine: "BBQ / Brewery",
    address: "1326 N Central Ave, Phoenix, AZ 85004",
    description: "Full-service BBQ restaurant and taproom from the team behind Oro Brewing Co. and Nicky's Barbecue."
  },
  {
    name: "Alden @ Phoenix Art Museum",
    cuisine: "American",
    address: "1625 N Central Ave, Phoenix, AZ 85004",
    description: "Refined yet welcoming dining at the Phoenix Art Museum overlooking the Dorrance Sculpture Garden."
  },
  {
    name: "CRUST Italian American Fusion",
    cuisine: "Italian / American",
    address: "100 N 3rd St, Phoenix, AZ 85004",
    description: "Italian-American fusion restaurant offering creative takes on classic Italian dishes."
  },
  {
    name: "Press Coffee",
    cuisine: "Cafe / Coffee",
    address: "100 N 3rd St, Phoenix, AZ 85004",
    description: "Local Arizona specialty coffee roasters with carefully sourced and crafted brews."
  },
  {
    name: "City Central Coffee",
    cuisine: "Cafe / Coffee",
    address: "100 N 3rd St, Phoenix, AZ 85004",
    description: "Downtown coffee shop offering espresso drinks, cold brew, and light pastries."
  },
  {
    name: "Bosa Donuts - Arizona Center",
    cuisine: "Dessert / Bakery",
    address: "455 N 3rd St, Phoenix, AZ 85004",
    description: "Iconic Phoenix donut shop serving fresh, made-daily donuts and pastries."
  },
  {
    name: "Cleaverman",
    cuisine: "Steakhouse",
    address: "455 N 3rd St #1005, Phoenix, AZ 85004",
    description: "Grand steakhouse at Arizona Center led by Chef Ivan Gonzalez, celebrating beef and shellfish with signature dry-aged cuts."
  },
  {
    name: "Dough Boy Pizza Co.",
    cuisine: "Italian / Pizza",
    address: "455 N 3rd St, Phoenix, AZ 85004",
    description: "Pizza restaurant at Arizona Center serving handcrafted pies and Italian favorites."
  },
  {
    name: "Chocolate Bash",
    cuisine: "Dessert",
    address: "455 N 3rd St, Phoenix, AZ 85004",
    description: "Everything-chocolate restaurant at Arizona Center with chocolate burgers, sushi rolls, fondue, and milkshakes."
  },
  {
    name: "Aroma India",
    cuisine: "Indian",
    address: "801 N 3rd St, Phoenix, AZ 85004",
    description: "Authentic Indian cuisine at the corner of 3rd and McKinley — perfect for curry, biryani, and naan."
  },
  {
    name: "Fleet Coffee",
    cuisine: "Cafe / Coffee",
    address: "811 N 3rd St, Phoenix, AZ 85004",
    description: "Beloved Austin-based coffee shop's first out-of-state location in Roosevelt Row."
  },
  {
    name: "Industry Standard",
    cuisine: "Asian Fusion / American",
    address: "128 E Roosevelt St, Phoenix, AZ 85004",
    description: "Modern American and Asian fusion in a community-focused environment in the heart of Roosevelt Row."
  },
  {
    name: "Kähvi Coffee + Cafe",
    cuisine: "Cafe / Coffee",
    address: "214 E Roosevelt St, Phoenix, AZ 85004",
    description: "Third space home to Drag Disco Brunch and unique seasonal lattes."
  },
  {
    name: "Pedal Haus Brewery",
    cuisine: "Gastropub / Brewery",
    address: "214 E Roosevelt St, Phoenix, AZ 85004",
    description: "Elevated gastro-pub with award-winning craft beer and a full food menu."
  },
  {
    name: "Eat the Rich",
    cuisine: "American / Bar",
    address: "504 E Roosevelt St, Phoenix, AZ 85004",
    description: "Neighborhood watering hole with hot dogs, cocktails, and country music in a dive bar atmosphere."
  },
  {
    name: "Culinary Gangster",
    cuisine: "American / Street Food",
    address: "513 E Roosevelt St, Phoenix, AZ 85004",
    description: "Chicago food truck turned brick-and-mortar with bold, award-winning street food flavors."
  },
  {
    name: "Big Bacon's",
    cuisine: "American / BBQ",
    address: "719 E Roosevelt St, Phoenix, AZ 85004",
    description: "Bacon-forward eatery serving smoky, creative takes on classic American BBQ."
  },
  {
    name: "Ghost Donkey",
    cuisine: "Mexican / Mezcal Bar",
    address: "903 N 2nd St, Phoenix, AZ 85004",
    description: "Mezcal and tequila bar with Mexican street food in a vibrant atmosphere."
  },
  {
    name: "Cham Pang Lanes",
    cuisine: "Bar / Entertainment",
    address: "903 N 2nd St, Phoenix, AZ 85004",
    description: "Champagne bar and bowling lanes with snacks and craft drinks."
  },
  {
    name: "Vegan Social",
    cuisine: "Vegan",
    address: "918 N 2nd St, Phoenix, AZ 85004",
    description: "All-vegan restaurant offering plant-based meals, smoothies, and desserts."
  },
  {
    name: "Barrel & Bushel @ The Hyatt",
    cuisine: "American / Whiskey Bar",
    address: "122 N 2nd St, Phoenix, AZ 85004",
    description: "Whiskey-focused restaurant and bar at the Hyatt with American fare and craft cocktails."
  },
  {
    name: "Cornish Pasty Co.",
    cuisine: "British / Pub",
    address: "7 W Monroe St, Phoenix, AZ 85003",
    description: "British-inspired pub with creative pasties, craft beers, and late-night vibes."
  },
  {
    name: "Seamus McCaffrey's",
    cuisine: "Irish Pub",
    address: "18 W Monroe St, Phoenix, AZ 85003",
    description: "Authentic Irish pub with traditional fare, live music, and a wide selection of whiskeys."
  },
  {
    name: "Cactus Cloud Cafe",
    cuisine: "Cafe",
    address: "111 W Monroe St, Phoenix, AZ 85003",
    description: "Cozy cafe offering coffee, pastries, and light meals in a welcoming space."
  },
  {
    name: "Huss Brewing Co.",
    cuisine: "Brewery / American",
    address: "225 E Monroe St, Phoenix, AZ 85004",
    description: "Arizona craft brewery taproom with house-brewed beers and a relaxed atmosphere."
  },
  {
    name: "Floor 13 Rooftop Bar @ Hilton Garden Inn",
    cuisine: "Rooftop Bar",
    address: "15 E Monroe St, Phoenix, AZ 85004",
    description: "Rooftop bar with stunning downtown Phoenix views, craft cocktails, and small plates."
  },
  {
    name: "Gallo Blanco",
    cuisine: "Mexican",
    address: "928 E Pierce St, Phoenix, AZ 85006",
    description: "Rustic Mexican comfort food with colorful cocktails, homemade tortillas, and great tacos."
  },
  {
    name: "Bad Jimmy's",
    cuisine: "American / Burgers",
    address: "108 E Pierce St, Phoenix, AZ 85004",
    description: "Double-stacked smashburgers, house-made pies, fries, and ice cream from a Pizzeria Bianco alum."
  },
  {
    name: "Mr. Baan's",
    cuisine: "Asian / Thai BBQ",
    address: "218 E Portland St #B, Phoenix, AZ 85004",
    description: "Charcoal-grilled Thai barbecue and cook-it-yourself Mookata experience from the Lom Wong team."
  },
  {
    name: "Lom Wong",
    cuisine: "Asian / Thai",
    address: "218 E Portland St, Phoenix, AZ 85004",
    description: "Authentic Thai restaurant bringing traditional Bangkok street food flavors to downtown."
  },
  {
    name: "Valley Coffee Company",
    cuisine: "Cafe / Coffee",
    address: "100 W Portland St, Phoenix, AZ 85003",
    description: "Local coffee shop serving specialty drinks and light bites."
  },
  {
    name: "The Larder + The Delta",
    cuisine: "American / Southern",
    address: "200 W Portland St, Phoenix, AZ 85003",
    description: "Southern-inspired brunch and dinner spot known for their legendary hot chicken sandwich."
  },
  {
    name: "Tap That Downtown",
    cuisine: "Bar / American",
    address: "909 N 5th St, Phoenix, AZ 85004",
    description: "Self-serve craft beer taproom with dozens of rotating taps and a casual atmosphere."
  },
  {
    name: "Greenwood Brewing",
    cuisine: "Brewery",
    address: "922 N 5th St, Phoenix, AZ 85004",
    description: "Woman-owned brewing company founded by Megan Greenwood, serving brews including the popular Herstory Pale Ale."
  },
  {
    name: "CP Peixoto Coffee & Chaconne Pâtisserie",
    cuisine: "Cafe / Bakery",
    address: "850 N 5th St, Phoenix, AZ 85004",
    description: "Artisan coffee and French pastry shop with carefully crafted drinks and baked goods."
  },
  {
    name: "Blue House Coffee",
    cuisine: "Cafe / Coffee",
    address: "435 N 5th St, Phoenix, AZ 85004",
    description: "Neighborhood coffee shop with a relaxed vibe, specialty coffee, and pastries."
  },
  {
    name: "Guy Fieri's DTPHX Kitchen + Bar",
    cuisine: "American",
    address: "201 S 4th St, Phoenix, AZ 85004",
    description: "Celebrity chef Guy Fieri's downtown Phoenix restaurant with bold American flavors."
  },
  {
    name: "The Art of Baking",
    cuisine: "Bakery / Dessert",
    address: "310 S 4th St, Phoenix, AZ 85004",
    description: "Artisan bakery offering handcrafted breads, pastries, cakes, and baked goods."
  },
  {
    name: "Tacos Los Vales",
    cuisine: "Mexican / Tacos",
    address: "310 S 4th St, Phoenix, AZ 85004",
    description: "Classic Mexican cuisine near Chase Field with tacos, birria, and quesadillas."
  },
  {
    name: "The Rose Garden",
    cuisine: "Italian",
    address: "101 N 1st Ave, Phoenix, AZ 85003",
    description: "Italian restaurant with a romantic atmosphere, garden setting, and classic dishes."
  },
  {
    name: "Barcoa Agaveria",
    cuisine: "Mexican / Agave Bar",
    address: "829 N 1st Ave, Phoenix, AZ 85003",
    description: "Agave spirits bar featuring mezcal, tequila, and Mexican-inspired cocktails and bites."
  },
  {
    name: "Zeez Cafe & Grill",
    cuisine: "Mediterranean",
    address: "209 W Jackson St, Phoenix, AZ 85003",
    description: "Mediterranean cafe and grill with fresh hummus, falafel, shawarma, and grilled specialties."
  },
  {
    name: "Sticklers Cafe",
    cuisine: "American / Cafe",
    address: "30 N 3rd Ave, Phoenix, AZ 85003",
    description: "Neighborhood cafe serving sandwiches, coffee, and comfort food classics."
  },
  {
    name: "Carcara @ Sheraton Phoenix Downtown",
    cuisine: "American",
    address: "340 N 3rd St, Phoenix, AZ 85004",
    description: "Hotel restaurant at the Sheraton with contemporary American cuisine and craft cocktails."
  },
  {
    name: "NW Coffee",
    cuisine: "Cafe / Coffee",
    address: "101 E Buchanan St, Phoenix, AZ 85004",
    description: "Coffee shop in the Downtown Phoenix Warehouse District with specialty lattes, smoothies, and pastries."
  },
  {
    name: "Samsara",
    cuisine: "Persian / Hookah Lounge",
    address: "901 N 4th St, Phoenix, AZ 85004",
    description: "Restaurant, bar, and hookah lounge offering Persian cuisine and craft cocktails."
  },
  {
    name: "Thor's Skyr",
    cuisine: "Dessert / Icelandic",
    address: "1229 Grand Ave, Phoenix, AZ 85007",
    description: "Bringing a taste of Iceland with skyr — creamy protein-packed dairy in smoothies and bowls."
  },
  {
    name: "Bacanora",
    cuisine: "Mexican / Sonoran",
    address: "1301 Grand Ave, Phoenix, AZ 85007",
    description: "Sonoran-inspired cuisine with wood-fired dishes and a carefully curated bar program."
  },
  {
    name: "Sake Haus",
    cuisine: "Asian / Japanese",
    address: "214 E Roosevelt St, Phoenix, AZ 85004",
    description: "Spirit-forward sushi bar with a Tokyo street vibe, Japanese sakes, whisky, and creative cocktails."
  },
  {
    name: "Palma",
    cuisine: "Asian / Tropical",
    address: "903 N 2nd St, Phoenix, AZ 85004",
    description: "Tropical cocktails, sushi, savory bites, and more in Roosevelt Row."
  },
  {
    name: "Sana Sana Cerveceria",
    cuisine: "Brewery / Latin",
    address: "Roosevelt Row, Phoenix, AZ 85004",
    description: "Craft cerveceria in Evans Churchill neighborhood connecting community through craft beer with Hispanic and Latin flavors."
  },
  {
    name: "The Mix by Chic Chef",
    cuisine: "Healthy / Salads",
    address: "455 N 3rd St, Phoenix, AZ 85004",
    description: "Stylish walk-up salad bar at Arizona Center serving fresh, chef-driven fare from Nik Fields."
  },
  {
    name: "Origen",
    cuisine: "Mexican / Upscale",
    address: "455 N 3rd St, Phoenix, AZ 85004",
    description: "Upscale Mexican dining experience at Arizona Center transforming the downtown food scene."
  },
  {
    name: "The Yard Milkshake Bar",
    cuisine: "Dessert / Ice Cream",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Over-the-top milkshakes with extravagant toppings and creative flavor combinations."
  },
  {
    name: "Little Rituals",
    cuisine: "Cocktail Bar",
    address: "132 E Washington St, Phoenix, AZ 85004",
    description: "Upscale cocktail bar with meticulously crafted drinks and a refined atmosphere."
  },
  {
    name: "Flour & Thyme",
    cuisine: "American / Mediterranean",
    address: "102 E Buchanan St, Phoenix, AZ 85004",
    description: "Chef Ivan Jacobo's concept in the former Anhelo space at Orpheum Lofts with garden, sea, and land menu items."
  },
  {
    name: "Loco Style Grindz",
    cuisine: "Hawaiian",
    address: "901 N 1st St, Phoenix, AZ 85004",
    description: "Hawaiian plate lunches inside The Churchill — chicken katsu, teriyaki steak, rice, and mac salad."
  },
  {
    name: "Dapper & Stout",
    cuisine: "Cafe / Coffee",
    address: "201 E Washington St, Phoenix, AZ 85004",
    description: "Ready-made sandwiches, pastries, and coffee on the go at the Collier Center."
  },
  {
    name: "Cupbop",
    cuisine: "Asian / Korean",
    address: "Phoenix, AZ 85004",
    description: "Delicious Korean cuisine with flavorful, naturally healthy dishes in convenient bowl format."
  },
  {
    name: "Fillmore Coffee",
    cuisine: "Cafe / Coffee",
    address: "Phoenix, AZ 85004",
    description: "Australian-style coffee from owner Tristan Davies with in-house roasted beans and exceptional brews."
  },
  {
    name: "Turquoise Wine Bar",
    cuisine: "Wine Bar",
    address: "Phoenix, AZ 85004",
    description: "Comfortable wine lounge and tasting room with a whimsical yet refined atmosphere."
  },
  {
    name: "Jobot Coffee",
    cuisine: "Cafe / Brunch",
    address: "Phoenix, AZ 85004",
    description: "Beloved cafe offering sweet or savory crepes, waffles, avocado toast, plus coffee and tea."
  },
  {
    name: "Highball",
    cuisine: "Cocktail Bar",
    address: "Phoenix, AZ 85004",
    description: "Award-winning neighborhood cocktail bar curated for cocktail-forward and late-night revelers."
  },
  {
    name: "Yogi's Grill",
    cuisine: "Asian / Teriyaki",
    address: "2 E Jefferson St, Phoenix, AZ 85004",
    description: "Teriyaki and Asian-inspired grill with fresh, made-to-order bowls and plates."
  },
  {
    name: "Mrs. White's Golden Rule Cafe",
    cuisine: "American / Soul Food",
    address: "808 E Jefferson St, Phoenix, AZ 85034",
    description: "Legendary soul food institution serving home-cooked Southern classics since 1964."
  },
  {
    name: "Lo-Lo's Chicken & Waffles",
    cuisine: "American / Soul Food",
    address: "10 W South Mountain Ave, Phoenix, AZ 85041",
    description: "Iconic comfort food from restaurateur Larry 'Lo-Lo' White with signature chicken and waffles."
  },
  {
    name: "Taco Chelo",
    cuisine: "Mexican / Tacos",
    address: "501 E Roosevelt St, Phoenix, AZ 85004",
    description: "Simple yet perfected menu of tacos and Mexican favorites in Roosevelt Row since 2018."
  },
  {
    name: "ACRES Community Creators Marketplace",
    cuisine: "Food Hall / Market",
    address: "610 E Roosevelt St, Phoenix, AZ 85004",
    description: "Community marketplace empowering local Black-owned businesses with food vendors and more in Roosevelt Row."
  },
  {
    name: "Unfiltered Natural Wine and More",
    cuisine: "Wine Bar",
    address: "111 W Monroe St, Phoenix, AZ 85003",
    description: "Natural wine bar offering a curated selection of organic and biodynamic wines."
  }
];
