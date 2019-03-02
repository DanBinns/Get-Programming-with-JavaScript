//showLine(length + 0-40); to display dashes
//showLine(); to display 40 dashes

var showLine = function (length) {
var line = "----------------------------------------";
    console.log(line.substring(0, length));
};

showRecipe = function () {
  showLine();
  console.log ("Recipe Name: " + recipe.name);
  console.log("Ingredients: " + recipe.ingredients);
  console.log("Seasoning: " + recipe.seasoning);
  console.log("Accompaniments: " + recipe.accompaniments);
  showLine();
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

var recipe3 = {
  name: "Chilli con carne",
  ingredients: "Minced beef, tomatoes, fresh red chillis, kidney beans",
  seasoning: "Salt, pepper, cayenne pepper, smoked paprika",
  acommaniments: "Rice, cheese, guacamole, sour cream, salsa",
}

recipe = recipe1; showRecipe();

recipe = recipe2; showRecipe();

recipe = recipe3; showRecipe();

//
