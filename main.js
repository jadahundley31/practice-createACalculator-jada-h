//const input = require('readline-sync');
//let chooseOperation = input.question("Choose an operation: ");
//console.log(`You chose ${chooseOperation}.`);

// Absolute Value Calculation: Given any number, return its absolute value.
function absoluteValueCalculation(num) {
    return Math.abs(num);
}
console.log(absoluteValueCalculation(-45.67));
console.log(absoluteValueCalculation(-31));

//Power Calculation: Calculate and return the value of a base raised to a specific power.
function powerCalculation(num1,num2) {
    return Math.pow(num1,num2);
}
console.log(powerCalculation(5,3));
console.log(powerCalculation(2,2));

//Square Root Finder: Calculate the square root of a number.
function squareRootFinder(num) {
    return Math.sqrt(num);
}
console.log(squareRootFinder(144));
console.log(squareRootFinder(16));

//Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
let numArray = [3, 78, -12, 0.5, 27];
function findingMaximum() {
    function findingMinimum() {
        return Math.min(...numArray);
    }
    console.log("Minimum: " + findingMinimum());
    return Math.max(...numArray);
}
console.log("Maximum: " + findingMaximum());

//Random Number Generator: Generate a random integer within a specified range.
function randomNumGenerator() {
    let num = Math.floor((Math.random() * 50) + 1);
    return num;
}
console.log(randomNumGenerator());

//Custom Rounding: Round a number to a specified number of decimal places.
function customRounding() {
    let roundedNum = Math.round(23.67891 * 100) / 100;
    return roundedNum;
}
console.log(customRounding());