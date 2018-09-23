// Basic function expression that logs "Hello World!"

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();

// Basic function declaration that logs "Goodbye World"

function sayGoodbye () {console.log("Goodbye World")};

sayGoodbye();

// Prints movie details to the console

var showMovieInfo;

var movie = {
  title : "Terminator 2",
  actors : "Arnold",
  directors : "Michael Bay",
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

showMovieInfo ()

//Multiple choice quiz

var question;
var question1;
var question2;
var question3;

question1 = {
		question:         "What is the capital of England?",
		answer1:          "London",
		answer2:          "Newcastle",
		answer3:          "Birmingham",
		answer4:          "Manchester",
		correctAnswer:    "London",
		marksForQuestion: 1
};

 question2 = {
		question:         "What is the capital of France?",
    answer1:          "Bordeaux",
    answer2:          "F",
    answer3:          "Paris",
		answer4:          "Brussels",
    correctAnswer:    "Paris",
    marksForQuestion: 1
};

 question3 = {
		question:					"What is the capital of Ireland?",
		answer1: 					"Dublin",
		answer2:					"Kerry",
		answer3:					"Killarney",
		answer4:					"Belfast",
		correctAnswer:		"Dublin",
		marksForQuestion:	1
};

showQuestionsAndAnswers = function () {
	console.log(question);
	console.log(answer1);
	console.log(answer2);
	console.log(answer3);
	console.log(answer4);
	console.log("You will receive");
};

question = question1;
showQuestionsAndAnswers();
