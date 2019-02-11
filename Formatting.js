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
