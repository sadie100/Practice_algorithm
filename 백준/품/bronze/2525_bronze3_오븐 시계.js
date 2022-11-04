let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split("\n");

let time = input[0].split(" ");

let hour = Number(time[0]);
let minute = Number(time[1]);

let cookingTime = Number(input[1]);

const resultTime = hour * 60 + minute + cookingTime;

let resultTimeHour = parseInt(resultTime / 60);

const resultTimeMin = resultTime - resultTimeHour * 60;

console.log(resultTimeHour % 24, resultTimeMin);
