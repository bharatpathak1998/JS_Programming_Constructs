console.log("Enter any year to check leap year or not");
const prompt = require("prompt-sync")();
const year = parseInt(prompt("Enter year : "));

if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
