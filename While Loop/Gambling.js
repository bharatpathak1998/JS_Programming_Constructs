let money = 100
let betAmount = 1
let count = 0
let winCount = 0
while (money != 0 && money != 200) {
    let bet = (Math.random() >= 0.5) ? 1 : 0;
    if (bet == 1) {
        winCount++
    } else {
        money = money - betAmount
    }
    count++
}
console.log("Final amount=" + money)
console.log("Number of bets : " + count + "\nNumber of times won : " + winCount)