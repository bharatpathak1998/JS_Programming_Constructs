const prompt = require("prompt-sync")();
console.log("1.Feet to Inch  2.Feet to Meter  3.Inch to Feet  4.Meter to Feet")
let option = parseInt(prompt());
let number = prompt("Enter Value : ");
switch (option) {
    case 1:
        let inch = number * 12;
        console.log(number + " feet = " + inch + " inch");
        break;
    case 2:
        let meter = number / 3.28084;
        console.log(number + " feet = " + meter + " meter");
        break;
    case 3:
        let feet = number / 12;
        console.log(number + " inch = " + feet + " feet");
        break;
    case 4:
        let feet1 = number * 3.28084;
        console.log(number + " meter = " + feet1 + " feet");
        break;
    default:
        console.log("Please Enter Valid Option!")
        break;
}