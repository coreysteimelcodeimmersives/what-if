const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number: "));

let div3 = num % 3;

let div5 = num % 5;

if (div3 === 0 && div5 === 0) {
    console.log("fizzbuzz");
} else if (div3 === 0) {
    console.log("fizz");
} else if ( div5 === 0) {
    console.log("buzz")
} else {
    console.log("Enter another number.")
}