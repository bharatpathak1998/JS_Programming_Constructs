const prompt = require("prompt-sync")();
let value = parseInt(prompt("Enter The Value Of N : "));
let harmonic = 0;
for (let i = 1; i <= value; i++) {
    harmonic += (1 / i);
}
console.log(harmonic);