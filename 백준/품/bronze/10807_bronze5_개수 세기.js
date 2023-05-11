//10807 개수 세기

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const totalCnt = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const finding = Number(input[2]);

console.log(numbers.filter((d) => d === finding).length);
