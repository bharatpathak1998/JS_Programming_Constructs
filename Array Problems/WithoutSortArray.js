let random = new Array();
let n = 10;

for (i = 0; i < n; i++) {
    let randomNum = (Math.floor(Math.random() * 1000) % 999);
    random.push(randomNum);
}
for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
        if (random[j] > random[j + 1]) {
            temp = random[j];
            random[j] = random[j + 1];
            random[j + 1] = temp;
        }
    }
}

console.log("\nArray Elements : " + random + "\nSecond Largest Number : " + random[n - 2] +
    "\nSecond Smallest Element : " + random[1]);
