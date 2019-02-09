/* Get Programming with JavaScript
 * Listing 5.13
 * Displaying a player's information
 */

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showLine();
    showDash();
    showPlayerName(playerName);

    showDash();

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showDash();
    showLine();
};

showLine = function () {
    console.log("")
};

showDash = function () {
    console.log"----------------------------");
}

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);
