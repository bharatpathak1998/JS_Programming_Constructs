function convertTemperature() {
    console.log("1.degC to degF");
    console.log("2.degF to degC");
    let options = parseInt(prompt());
    switch (options) {
        case 1:
            console.log("Freezing Point : " + ((boilingPoint * (9 / 5)) + 32) + " F");
            break;
        case 2:
            console.log("Boiling Point : " + ((freezingPoint - 32) * (9 / 5)) + " C");
            break;
        default:
            console.log("Please Enter Valid Option!")
            break;
    }
}

const prompt = require("prompt-sync")();
const boilingPoint = prompt("Enter The Boiling Point Between 0 C To 100 C : ");
const freezingPoint = prompt("Enter The Freezing Point Between 32 F To 212 F : ");
convertTemperature();