let map = new Map();
for (i = 1; i <= 12; i++) {
    map.set(i, 0);
}
for (let j = 1; j <= 50; j++) {
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    count = map.get(birthMonth) + 1;
    map.set(birthMonth, count);
}
console.log(map);