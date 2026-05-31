//const input = require('readline-sync');
//let chooseOperation = input.question("Choose an operation: ");
//console.log(`You chose ${chooseOperation}.`);

// Absolute Value Calculation: Given any number, return its absolute value.
function absoluteValueCalculation(num) {
    return Math.abs(num);
}
console.log("Absolute value of -45.67 and -31:", absoluteValueCalculation(-45.67), "and", absoluteValueCalculation(-31));

//Power Calculation: Calculate and return the value of a base raised to a specific power.
function powerCalculation(num1,num2) {
    return Math.pow(num1,num2);
}
console.log("5 raised to the power of 3:",powerCalculation(5,3));
console.log("2 raised to the power of 2:", powerCalculation(2,2));

//Square Root Finder: Calculate the square root of a number.
function squareRootFinder(num) {
    return Math.sqrt(num);
}
console.log("Square root of 144:", squareRootFinder(144));
console.log("Square root of 16:", squareRootFinder(16));

//Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
let numArray = [3, 78, -12, 0.5, 27];
function findingMaximum() {
    function findingMinimum() {
        return Math.min(...numArray);
    }
    console.log("Minimum number: " + findingMinimum());
    return Math.max(...numArray);
}
console.log("Maximum number: " + findingMaximum());

//Random Number Generator: Generate a random integer within a specified range.
function randomNumGenerator(min, max) {
    let num = Math.floor((Math.random() *  (max - min +1)) + min);
    return num;
}
console.log("Random number between 1 and 50:", randomNumGenerator(1, 50));

//Custom Rounding: Round a number to a specified number of decimal places.
function customRounding() {
    let roundedNum = Math.round(23.67891 * 100) / 100;
    return roundedNum;
}
console.log("Round 23.67891 to 2 decimal places:", customRounding());

