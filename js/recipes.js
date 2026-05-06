// ===== TalkToTaste - Recipe Data =====
// Developed by Akanksha Bursu

const RECIPES = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    emoji: "🧀",
    cuisine: "North Indian",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.9,
    description: "Rich, creamy tomato-based curry with soft paneer cubes. A restaurant favourite made at home.",
    ingredients: [
      "250g paneer, cubed",
      "2 large tomatoes, pureed",
      "1 large onion, finely chopped",
      "2 tbsp butter",
      "1 tbsp oil",
      "1/2 cup fresh cream",
      "1 tsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp kasuri methi",
      "Salt to taste",
      "Fresh coriander to garnish"
    ],
    steps: [
      "Heat oil and butter in a pan over medium heat.",
      "Add chopped onions and sauté until golden brown, about 8-10 minutes.",
      "Add ginger-garlic paste and cook for 2 minutes until raw smell goes away.",
      "Add tomato puree and cook for 10 minutes, stirring occasionally, until oil separates.",
      "Add red chili powder, garam masala, and salt. Mix well.",
      "Add paneer cubes gently and stir to coat with the masala.",
      "Pour in fresh cream and mix. Simmer for 5 minutes.",
      "Crush kasuri methi between palms and add. Cook 1 more minute.",
      "Garnish with fresh coriander and serve hot with naan or rice."
    ],
    timers: [null, 600, 120, 600, null, null, 300, 60, null]
  },
  {
    id: 2,
    name: "Butter Chicken",
    emoji: "🍗",
    cuisine: "North Indian",
    time: "55 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.9,
    description: "Tender chicken in a luxuriously smooth, mildly spiced tomato-cream sauce.",
    ingredients: [
      "500g chicken, boneless",
      "3 large tomatoes, pureed",
      "1 cup yogurt",
      "3 tbsp butter",
      "1/2 cup cream",
      "1 tbsp oil",
      "1 tbsp ginger-garlic paste",
      "1 tsp cumin",
      "1 tsp coriander powder",
      "1 tsp kashmiri red chili",
      "1 tsp garam masala",
      "Salt to taste"
    ],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, chili, and salt for at least 30 minutes.",
      "Grill or pan-fry the chicken until cooked and slightly charred. Set aside.",
      "Heat butter and oil in a pan. Add cumin seeds and let them splutter.",
      "Add tomato puree and cook for 12-15 minutes until thick and oil separates.",
      "Add all dry spices and cook for 2 minutes.",
      "Blend the sauce smooth if desired, then return to pan.",
      "Add cooked chicken pieces and simmer for 10 minutes.",
      "Stir in cream and kasuri methi. Simmer for 3 more minutes.",
      "Serve hot garnished with cream swirl and fresh coriander."
    ],
    timers: [1800, null, null, 780, 120, null, 600, 180, null]
  },
  {
    id: 3,
    name: "Dal Makhani",
    emoji: "🫘",
    cuisine: "Punjabi",
    time: "8 hours",
    servings: 6,
    difficulty: "Medium",
    rating: 4.9,
    description: "Slow-cooked black lentils in a rich, buttery tomato gravy — the pride of Punjabi cuisine.",
    ingredients: [
      "1 cup whole black lentils (urad dal)",
      "1/4 cup kidney beans (rajma)",
      "3 tbsp butter",
      "2 tbsp oil",
      "2 large tomatoes, pureed",
      "1 onion, finely chopped",
      "1 tbsp ginger-garlic paste",
      "1/2 cup cream",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "Salt to taste"
    ],
    steps: [
      "Soak urad dal and rajma overnight or for 8 hours.",
      "Pressure cook them with salt and water for 6-7 whistles until completely soft.",
      "In a pan, heat butter and oil. Add cumin seeds.",
      "Add onions and cook until golden, 10 minutes.",
      "Add ginger-garlic paste, cook 2 minutes.",
      "Add tomato puree and cook 15 minutes until oil separates.",
      "Add spices and mix well.",
      "Add cooked dal to the masala. Mash slightly for creaminess.",
      "Simmer on low heat for 30 minutes, stirring occasionally.",
      "Add cream and butter. Simmer 10 more minutes.",
      "Serve hot with naan, garnished with butter and cream."
    ],
    timers: [28800, null, null, 600, 120, 900, null, null, 1800, 600, null]
  },
  {
    id: 4,
    name: "Chole Bhature",
    emoji: "🫓",
    cuisine: "Punjabi",
    time: "60 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    description: "Spicy chickpea curry served with fluffy deep-fried bread — a beloved North Indian classic.",
    ingredients: [
      "2 cups chickpeas (soaked overnight)",
      "2 cups all-purpose flour",
      "1/2 cup yogurt",
      "2 tomatoes, pureed",
      "2 onions, chopped",
      "1 tbsp ginger-garlic paste",
      "2 tsp chole masala",
      "1 tsp cumin seeds",
      "1 tsp red chili",
      "Oil for frying",
      "Salt to taste"
    ],
    steps: [
      "Pressure cook soaked chickpeas with salt for 5-6 whistles.",
      "Make bhature dough by mixing flour, yogurt, salt, and water. Rest for 30 minutes.",
      "Heat oil in a pan. Add cumin seeds and chopped onions.",
      "Cook onions until golden, then add ginger-garlic paste.",
      "Add tomato puree and all spices. Cook 10 minutes.",
      "Add cooked chickpeas with some cooking water. Simmer 15 minutes.",
      "Roll bhature dough into oval shapes.",
      "Deep fry bhature in hot oil until puffed and golden.",
      "Serve chole hot with bhature, onion rings, and pickle."
    ],
    timers: [null, 1800, null, 600, 600, 900, null, null, null]
  },
  {
    id: 5,
    name: "Aloo Gobi",
    emoji: "🥦",
    cuisine: "North Indian",
    time: "35 mins",
    servings: 4,
    difficulty: "Easy",
    rating: 4.5,
    description: "Simple, comforting dry curry of potatoes and cauliflower with aromatic spices.",
    ingredients: [
      "2 medium potatoes, cubed",
      "1/2 cauliflower, florets",
      "2 tbsp oil",
      "1 tsp cumin seeds",
      "1 onion, sliced",
      "1 tomato, chopped",
      "1 tsp turmeric",
      "1 tsp coriander powder",
      "1 tsp red chili",
      "1/2 tsp garam masala",
      "Fresh coriander",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pan. Add cumin seeds, let them splutter.",
      "Add onions and cook until translucent, about 5 minutes.",
      "Add turmeric and potatoes. Mix well and cook 5 minutes.",
      "Add cauliflower florets and tomato. Mix well.",
      "Cover and cook on low heat for 15 minutes until vegetables are tender.",
      "Add coriander powder, red chili, garam masala. Mix and cook 3 more minutes.",
      "Garnish with fresh coriander and serve with roti."
    ],
    timers: [null, 300, 300, null, 900, 180, null]
  },
  {
    id: 6,
    name: "Rajma Chawal",
    emoji: "🍚",
    cuisine: "Punjabi",
    time: "60 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,
    description: "Comforting kidney bean curry served over steamed basmati rice — a Sunday staple.",
    ingredients: [
      "1.5 cups kidney beans (soaked overnight)",
      "1.5 cups basmati rice",
      "2 tomatoes, pureed",
      "1 large onion, finely chopped",
      "1 tbsp butter",
      "1 tbsp ginger-garlic paste",
      "1 tsp rajma masala",
      "1 tsp cumin seeds",
      "1 tsp red chili",
      "Salt to taste",
      "Fresh coriander"
    ],
    steps: [
      "Pressure cook soaked rajma with salt for 6-7 whistles.",
      "Cook rice separately with 1:2 rice-to-water ratio.",
      "Heat butter in a pan. Add cumin seeds.",
      "Add onions and cook until golden, 8 minutes.",
      "Add ginger-garlic paste, cook 2 minutes.",
      "Add tomato puree and all spices. Cook 12 minutes.",
      "Add cooked rajma with some cooking liquid. Simmer 15 minutes.",
      "Mash a few beans for a thicker gravy.",
      "Serve hot rajma over steamed rice with butter on top."
    ],
    timers: [null, null, null, 480, 120, 720, 900, null, null]
  }
];

// Search recipes
function searchRecipes(query) {
  const q = query.toLowerCase();
  return RECIPES.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.cuisine.toLowerCase().includes(q) ||
    r.ingredients.some(i => i.toLowerCase().includes(q))
  );
}

// Get recipe by id
function getRecipe(id) {
  return RECIPES.find(r => r.id === parseInt(id));
}

// Favorites management
function getFavorites() {
  return JSON.parse(localStorage.getItem('ttt_favorites') || '[]');
}

function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) favs.push(id);
  else favs.splice(idx, 1);
  localStorage.setItem('ttt_favorites', JSON.stringify(favs));
  return idx === -1;
}

function isFavorite(id) {
  return getFavorites().includes(id);
}
