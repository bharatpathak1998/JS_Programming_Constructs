const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the number : "));
let flag = 0;
for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0)
        flag = 1;
}
if (flag == 0)
    console.log("Number is Prime");
else
    console.log("Number is not Prime");