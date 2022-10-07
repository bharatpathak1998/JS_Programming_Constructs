function isPalindrome(num) {
    var rem, temp, rev = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        rev = rev * 10 + rem;
    }
    if (rev == temp) {
        console.log("Number is palindrome");
    }
    else {
        console.log("Number is not palindrome");
    }
}

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Number : "));
isPalindrome(num);