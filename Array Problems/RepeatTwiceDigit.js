let repeatNumArray = new Array();
for (let i = 1; i <= 100; i++) {
    if (i % 11 == 0) {
        repeatNumArray.push(i);
    }
}

console.log(repeatNumArray);