const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter any number : "));

for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
        let temp = 0;
        while (number % i == 0) {
            temp++;
            number = number / i;
        }
        console.log(i);
    }
}