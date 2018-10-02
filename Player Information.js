var player1;
var player2;
var player;
var showPlayerInfo;
var playerPlace;
var playerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

//Display all player information to the console

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

//Display only player name and place to the console

playerPlace = function () {
    console.log(player.name);
    console.log(player.name + " is in " + player.place);
};

//Display only player name and health to the console

playerHealth = function () {
    console.log(player.name);
    console.log(player.name + " has health " + player.health);
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

player = player1;
playerPlace ();
playerHealth ();
