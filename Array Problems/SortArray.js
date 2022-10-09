let random = new Array();
let n = 10;

for (i = 0; i < n; i++) {
    let randomNum = (Math.floor(Math.random() * 1000) % 999);
    random.push(randomNum);
    random.sort();
}

console.log("\nArray Elements : " + random + "\nSecond Largest Number : " + random[8] +
    "\nSecond Smallest Element : " + random[1]);