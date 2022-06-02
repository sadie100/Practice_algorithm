const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

const a = input[0]; //고정비용
const b = input[1]; //가변비용
const c = input[2]; //책정가격

if (c <= b) {
  n = -1;
} else {
  n = Math.floor(a / (c - b)) + 1;
}

console.log(n);
