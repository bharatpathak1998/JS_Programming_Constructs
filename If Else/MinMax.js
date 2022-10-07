let randomNumber1 = Math.floor(Math.random() * 900) + 100;
let randomNumber2 = Math.floor(Math.random() * 900) + 100;
let randomNumber3 = Math.floor(Math.random() * 900) + 100;
let randomNumber4 = Math.floor(Math.random() * 900) + 100;
let randomNumber5 = Math.floor(Math.random() * 900) + 100;

const randomNumber = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];
const maximum = Math.max(...randomNumber);
console.log("The Maximum Value : " + maximum);
const minimum = Math.min(...randomNumber);
console.log("The Minimum Value : " + minimum);