//Multiple choice quiz

var question;
var question1;
var question2;
var question3;
var showQuestionsAndAnswers;

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
	console.log(question.question);
	console.log(question.answer1);
	console.log(question.answer2);
	console.log(question.answer3);
	console.log(question.answer4);
	console.log("You will receive " + question.marksForQuestion + " marks for succesfully answering this question");
};

question = question1;
showQuestionsAndAnswers();

question = question2;
showQuestionsAndAnswers();

question = question3;
showQuestionsAndAnswers();
