const prompt = require("prompt-sync")();
const num = prompt("Enter the Number : ");
let factorsArr = new Array();

function primeFactors(num) {
    for (let i = 2; i <= num; i++) {
        while (num % i == 0) {
            factorsArr.push(i);
            num = num / i;
        }
    }
    return factorsArr;
}

console.log(primeFactors(num));
