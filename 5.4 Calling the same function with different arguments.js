//Incomplete

var showMessage;
var myMessage;
var message;

//showMessage function using console.log(); for the text

showMessage = function (message) {
	console.log("The message is: " + '\n' + message);
};

myMessage = function () {
  console.log("The message is: " + '\n');
}

//showMessage function using both the myMessage and showMessage functions

showMessage = function () {
  myMessage();
  showMessage();
};

showMessage("hello");

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");
