const prompt = require('prompt-sync')();
function arithmatic(a, b, c) {

    let operation1 = a + b * c;
    console.log("a + b * c = " + operation1);

    let operation2 = a % b + c;
    console.log("a % b + c = " + operation2);

    let operation3 = c + a / b;
    console.log("c + a / b = " + operation3);

    let operation4 = a * b + c;
    console.log("a * b + c = " + operation4);

    opArray = [operation1, operation2, operation3, operation4];
    min = opArray[0];
    max = opArray[0];
    for (array of opArray) {
        if (array < min)
            min = array;
    }
    for (array of opArray) {
        if (array > max)
            max = array;
    }
    console.log("Maximum operation: " + max);
    console.log("Minimum operation: " + min);
}
const firstNum = parseInt(prompt("Enter First Number : "));
const secondNum = parseInt(prompt("Enter Second Number : "));
const thirdNum = parseInt(prompt("Enter Third Number : "));
arithmatic(firstNum, secondNum, thirdNum);