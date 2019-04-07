/* Get Programming with JavaScript
 * Listing 5.05
 * Using the square function
 */

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

cube(10);
cube(-2);
cube(1111);
cube(0.5);


//Logs the square root of 9 to the console
Math.sqrt(9);
//Logs the square root of 100 to the console
Math.sqrt(100);
