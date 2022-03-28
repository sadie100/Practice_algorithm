const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));

const restArray = [];
input.forEach((num) => {
  restArray.push(num % 42);
});

const restSet = new Set(restArray);
console.log(restSet.size);
