/* Outputs
 *[object Object] {
 * author: "J. R. R. Tolkien",
 * published: 1937,
 * title: "The Hobbit"
 * }
*/

var book;

book = {
    title     : "The Hobbit",
    author    : "J. R. R. Tolkien",
    published : 1937
};

console.log(book);

/* Outputs
 * [object Object] {
 * author: "J. R. R. Tolkien",
 * published: 1937,
 *  title: "The Hobbit, or There and Back Again"
 * }
 * [object Object] {
 * author: "J.K. Rowling",
 * published: 2001,
 * title: "Harry Potter and the Chamber of Secrets"
 * }
 */

var book;

book = {
    title     : "The Hobbit, or There and Back Again",
    author    : "J. R. R. Tolkien",
    published : 1937
};

console.log(book);

var book2;

book2 = {
  title     : "Harry Potter and the Chamber of Secrets",
  author    : "J.K. Rowling",
  published : 2001
};

console.log(book2);

/* When "book" is typed into the console outputs
 * [object Object] {
 * title: "The Adventures of Tom Sawyer"
 * }
 */

var book;
var bookName;

bookName = "Hello";

book = {
    title : bookName
};

/* When "book1" or "book" are typed into the console Outputs
 * book1
 * [object Object] {
 * author: "J. R. R. Tolkien",
 * title: "The Hobbit"
 * }
 * book2
 * [object Object] {
 * author: "Philip Pullman",
 * title: "Northern Lights"
 * }
 */

var book1;
var book2;

book1 = {
  title  : "The Hobbit",
  author : "J. R. R. Tolkien"
};

book2 = {
	title  : "Northern Lights",
	author : "Philip Pullman"
};

/* Outputs
 * "The Hobbit"
 * "J. R. R. Tolkien"
 */

 var book;

 book = {
  title     : "The Hobbit",
 	author    : "J. R. R. Tolkien",
 	published : 1937
 };

 console.log(book.title);
 console.log(book.author);

 /* Outputs
  * "The Hobbit by J. R. R. Tolkien"
  * "Northern Lights by Philip Pullman"
  * "Harry Potter by J.K. Rowling and it's rated 5/10"
  */

  var book1;
  var book2;
  var book3;

  book1 = {
  	title: "The Hobbit",
  	author: "J. R. R. Tolkien"
  };

  book2 = {
  	title: "Northern Lights",
  	author: "Philip Pullman"
  };

  book3 = {
      title: "Harry Potter",
      author: "J.K. Rowling",
      rating: "5/10"
  }

  console.log(book1.title + " by " + book1.author);
  console.log(book2.title + " by " + book2.author);
  console.log(book3.title + " by " + book3.author + " and it's rated " + book3.rating)

  /* Outputs
  * "Max has scored 0"
  * "Max has scored 50"
  * "Max has scored 55"
  */

  var player1;

  player1 = {
  	  name: "Max",
  	  score: 0
  };

  console.log(player1.name + " has scored " + player1.score);

  player1.score = player1.score + 50;

  console.log(player1.name + " has scored " + player1.score);

  player1.score = player1.score + 50 * 0.1;

  console.log(player1.name + " has scored " + player1.score);

  /* When post or post2 are entered into the console outputs:
   *
   * post
   * [object Object] {
   * author: "Philae",
   * body: "You will not believe where I just woke up!! Only on a comet...",
   * created: "2015-06-21",
   * id: 1,
   * title: "My Crazy Space Adventure"
   * }
   * post2
   * [object Object] {
   * author: "Daniel",
   * body: "Nothing changes unless you make it change",
   * created: "2018-08-20",
   * id: 2,
   * title: "Hello"
   * }
   */

   var post = {
   	   id : 1,
   	   title : "My Crazy Space Adventure",
   	   author : "Philae",
   	   created : "2015-06-21",
   	   body : "You will not believe where I just woke up!! Only on a comet..."
   };

   var post2 = {
       id : 2,
       title : "Hello",
       author : "Daniel",
       created : "2018-08-20",
       body : "Nothing changes unless you make it change"
   };

   /* When geolocation is entered into the console outputs:
    * geolocation
    * [object Object] {
    * city: "San Francisco",
    * country: "US",
    * elevation: 47,
    * latitude: 37.775,
    * longitude: -122.418,
    * state: "CA",
    * zip: "94101"
    * }
    */

   /* When geolocation.city is entered into the console outputs:
    * "San Francisco"
    */

    var geolocation = {
      "city"      : "San Francisco",
      "state"     : "CA",
      "country"   : "US",
      "zip"       : "94101",
      "latitude"  : 37.775,
      "longitude" : -122.418,
      "elevation" : 47.000
    };

    // Question and answer quiz

    // Defines the question

    var questionAndAnswer = {
       	question:         "What is the capital of France?",
       	answer1:          "Bordeaux",
       	answer2:          "F",
       	answer3:          "Paris",
       	answer4:          "Brussels",
       	correctAnswer:    "Paris",
       	marksForQuestion: 2
       };

       var wrongAnswer = "Wrong answer, please try again";

     // Returns the relevent response based on the answer entered into the console

      var A = wrongAnswer;
      var B = wrongAnswer;
      var C = "Correct, you've earnt " + questionAndAnswer.marksForQuestion + " marks for successfully answering this question.";
      var D = wrongAnswer;
      var a = wrongAnswer;
      var b = wrongAnswer;
      var c = "Correct, you've earnt " + questionAndAnswer.marksForQuestion + " marks for successfully answering this question.";
      var d = wrongAnswer;

     // Displays the question to the user in the console

     console.log(questionAndAnswer.question);
     console.log("A: " + questionAndAnswer.answer1);
     console.log("B: " + questionAndAnswer.answer2);
     console.log("C: " + questionAndAnswer.answer3);
     console.log("D: " + questionAndAnswer.answer4);

     // Examples of how repetitive code can get without functions

     // Example 1

      var movie1;
      var movie2;
      var movie3;

      movie1 = {
        title: "Inside Out",
        actors: "Amy Poehler, Bill Hader",
        directors: "Pete Doctor, Ronaldo Del Carmen"
        };

      movie2 = {
        title: "Spectre",
        actors: "Daniel Craig, Christoph Waltz",
        directors: "Sam Mendes"
        };

      movie3 = {
        title: "Star Wars: Episode VII - The Force Awakens",
        actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
        directors: "J.J.Abrams"
        };

        console.log("Movie information for " + movie1.title);
        console.log("------------------------------");
        console.log("Actors: " + movie1.actors);
        console.log("Directors: " + movie1.directors);
        console.log("------------------------------");

        console.log("Movie information for " + movie2.title);
        console.log("------------------------------");
        console.log("Actors: " + movie2.actors);
        console.log("Directors: " + movie2.directors);
        console.log("------------------------------");

        console.log("Movie information for " + movie3.title);
        console.log("------------------------------");
        console.log("Actors: " + movie3.actors);
        console.log("Directors: " + movie3.directors);
        console.log("------------------------------");

        // Example 2

        var sale1;
        var sale2;
        var sale3;

        sale1 = { price: 140, taxRate: 15 };
        sale2 = { price: 40, taxRate: 10 };
        sale3 = { price: 120, taxRate: 20 };

        sale1.tax = sale1.price * sale1.taxRate / 100;
        sale2.tax = sale2.price * sale2.taxRate / 100;
        sale3.tax = sale3.price * sale3.taxRate / 100;

        sale1.total = sale1.price + sale1.tax;
        sale2.total = sale2.price + sale2.tax;
        sale3.total = sale3.price + sale3.tax;

        console.log("price = $" + sale1.price);
        console.log("tax @ " + sale1.taxRate + "% = $" + sale1.tax);
        console.log("total cost = $" + sale1.total);

        console.log("price = $" + sale2.price);
        console.log("tax @ " + sale2.taxRate + "% = $" + sale2.tax);
        console.log("total cost = $" + sale2.total);

        console.log("price = $" + sale3.price);
        console.log("tax @ " + sale3.taxRate + "% = $" + sale3.tax);
        console.log("total cost = $" + sale3.total);
