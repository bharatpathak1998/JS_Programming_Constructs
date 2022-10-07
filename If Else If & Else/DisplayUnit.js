const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter the digit like 1, 10, 100.... : "));

if (number == 1) console.log("Unit");
else if (number == 10) console.log("Ten");
else if (number == 100) console.log("Hundred");
else if (number == 1000) console.log("Thousand");
else if (number == 10000) console.log("Ten Thousand");
else if (number == 100000) console.log("Hundred Thousand");
else if (number == 1000000) console.log("Million");
else if (number == 10000000) console.log("Ten Million");
else if (number == 100000000) console.log("Hundred Million");
else if (number == 1000000000) console.log("Billion");
else console.log("Please Enter Valid Number!");