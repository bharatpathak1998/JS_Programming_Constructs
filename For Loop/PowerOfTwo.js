const prompt = require("prompt-sync")();
let value = parseInt(prompt("Enter The Value Of N : "));

for (let i = 1; i <= value; i++) {
    let power = Math.pow(2, i);
    console.log(power);
}