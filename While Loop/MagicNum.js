const prompt = require("prompt-sync")();
const num = prompt("Enter the number : ");
if (num % 9 == 1)
    console.log("Magic number");
else
    console.log("Not a magic number");