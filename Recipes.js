showRecipe = function () {
  console.log ("Recipe Name: " + recipe.name);
  console.log("Ingredients: " + recipe.ingredients);
  console.log("Seasoning: " + recipe.seasoning);
  console.log("Accompaniments: " + recipe.accompaniments);
  console.log("*********************");
};

var recipe;

var recipe1 = {
  name: "Red Spiced Chicken Pasta",
  ingredients: "Chicken, bacon, sun dried tomatoes, garlic, cream, pasta",
  seasoning: "Salt, pepper",
  accompaniments: "Parmasan, Garlic bread",
};

var recipe2 = {
  name: "Carbonara",
  ingredients: "Pancette, egg, pasta",
  seasoning: "Salt, pepper",
  accompaniments: "Parmasan, Garlic bread",
}

recipe = recipe1; showRecipe();

recipe = recipe2; showRecipe();
