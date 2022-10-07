const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter any number : "));
let fact = 1;

for (let i = num; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact);