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
