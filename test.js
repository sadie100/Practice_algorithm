const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

numbers.reverse();
const proto = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  proto.push(i);
}
