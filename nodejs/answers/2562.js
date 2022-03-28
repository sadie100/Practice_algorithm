const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

let biggest;
let index;
for (let num of input) {
  const number = Number(num);
  if (!biggest) {
    biggest = number;
    index = input.indexOf(num) + 1;
  } else if (number > biggest) {
    biggest = number;
    index = input.indexOf(num) + 1;
  }
}

console.log(biggest);
console.log(index);
