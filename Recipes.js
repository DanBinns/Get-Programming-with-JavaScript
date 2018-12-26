var recipe;

var recipe1 = {
  name: "Red Spiced Chicken Pasta",
  ingredients: "Chicken, bacon, sun dried tomatoes, garlic, cream, pasta",
  seasoning: "Salt, pepper, parmasan",
};

var recipe2 = {
  name: "Carbonara",
  ingredients: "Pancette, egg, pasta",
  seasoning: "Salt, pepper, parmasan",
}

showRecipe = function () {
  console.log ("Recipe Name: " + recipe.name);
  console.log("Ingredients: " + recipe.ingredients);
  console.log("Seasoning: " + recipe.seasoning);
  console.log("*********************");
};

recipe = recipe1; showRecipe();


recipe = recipe2; showRecipe();
