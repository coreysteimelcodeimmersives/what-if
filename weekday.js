const prompt = require('prompt-sync')();

let num = Number(prompt("There are seven days in a week. Enter a number, 1 - 7, and I will tell you what day of the week the number corresponds to. Enter a number: "));

if (num === 1) {
    console.log("Monday");
} else if (num === 2) {
    console.log("Tuesday");
} else if (num === 3) {
    console.log("Wednesday");
} else if (num === 4) {
    console.log("Thursday");
} else if (num === 5) {
    console.log("Friday");
} else if (num === 6) {
    console.log("Saturday");
} else if (num === 7) {
    console.log("Sunday");
} else {
    console.log("error");
}