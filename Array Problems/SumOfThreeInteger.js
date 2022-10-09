let numArray = [5, -3, -2];
let sum = 0;
for (i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}

if (sum == 0) {
    console.log("Sum of 3 integer is zero")
} else {
    console.log("Sum of 3 integer is not zero");
}