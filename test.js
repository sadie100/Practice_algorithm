const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(n);
console.log(numbers);
