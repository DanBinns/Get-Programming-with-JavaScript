//showLine(length + 0-40); to display dashes
//showLine(); to display 40 dashes

var showLine = function (length) {
var line = "----------------------------------------";
    console.log(line.substring(0, length));
};

//line(); logs create a blank line

var line = function () {
    console.log('\n');
};

//showAsterisk(length + 0-40); to display dashes
//showAsterisk(); to display 40 asterisks

var showAsterisk = function (length) {
var line = "***************************************************";
    console.log(line.substring(0, length));
};

var showPlayerName = function (playerName) {
    showAsterisk(playerName.length + 4);
    console.log("* " + playerName + " *");
    showAsterisk(playerName.length + 4);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showLine(length + 0);
    showPlayerName(playerName);
    showLine(playerName.length + 30);
    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);
    showLine(playerName.length + 30);
};

//Assigns values for Player1

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

//Assigns values for player2

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

//Invoke function commands

showPlayerName(player1.name);
showPlayerHealth(player1.name, player1.health);
showPlayerPlace(player1.name, player1.health);
showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
