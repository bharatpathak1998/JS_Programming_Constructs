let inchs = 42;
let ft = inchs / 12;
console.log("42 inch = " + ft + " feet");

let len = 60;
let breadth = 40
let area = (len * breadth);
let areas = (area * 0.0929).toFixed(2);
console.log("Area in sq metres = " + areas + " sq-m");

let totalArea = areas * 25;
console.log("Total Area of 25 such plots in sq-m = " + totalArea + " sq-m");

let areaInAcre = (totalArea / 4047).toFixed(2);
console.log("Total Area of 25 such plots in acre = " + areaInAcre + " acres");