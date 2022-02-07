const prompt = require('prompt-sync')();

let num = Number(prompt("This program will break up your class into groups of 3's and 2's.\nEnter your class size: "));

let remainder = num % 3

console.log(remainder);

// if (num === 1) {
//     console.log("Monday");
// } else if (num === 2) {
//     console.log("Tuesday");
// } else if (num === 3) {
//     console.log("Wednesday");
// } else if (num === 4) {
//     console.log("Thursday");
// } else if (num === 5) {
//     console.log("Friday");
// } else if (num === 6) {
//     console.log("Saturday");
// } else if (num === 7) {
//     console.log("Sunday");
// } else {
//     console.log("error");
// }