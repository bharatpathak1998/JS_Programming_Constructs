let map = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
while (true) {
    let numOnDice = (Math.floor(Math.random() * 10) % 6) + 1;
    let count = map.get(numOnDice);
    map.set(numOnDice, ++count);
    if (Array.from(map.values()).includes(10))
        break;
}
console.log(map);

let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
console.log("Max Occurance : " + Array.from(sortedMap)[0]);
console.log("Min Occurance : " + Array.from(sortedMap)[5]);