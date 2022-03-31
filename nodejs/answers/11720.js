const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

console.log(
  input[1].split("").reduce((acc, cur) => {
    return acc + +cur;
  }, 0)
);
