//Single parameter

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");
showMessage("Hello, is it me you're looking for?")

//Multiple parameters

//Add
var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

console.log("Add Examples");

showSum(30, 23);
showSum(2.8, -5);
showSum(56, 74);
console.log("__________");

//Subtract
var showSubtraction;

showSubtraction = function (number1, number2) {
	var total = number1 - number2;
	console.log("The sum is " + total);
};

console.log("Subtract Examples");
showSubtraction(2, 1);
showSubtraction(10, 5);
showSubtraction(10, 20);
console.log("__________");

//Multiply
var showProduct;

showProduct = function (number1, number2, number3) {
	var total = number1 * number2 * number3;
	console.log("The sum is " + total);
}

console.log("Multiply Examples");
showProduct(2, 2, 2);
showProduct(10, 10, 10);
showProduct(12, 12, 12);
console.log("__________");

//Divide
var showDifference

showDifference = function (number1, number2) {
	var total = number1 / number2;
	console.log("The sum is " + total);
}

console.log("Divide Examples");
showDifference(2, 2);
showDifference(10, 2);
showDifference(100, 10);
console.log("__________");
