const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const array = input[1].split(" ");

let max = null;
let min = null;
array.map((cur) => {
  if (max === null || min === null) {
    max = parseInt(cur);
    min = parseInt(cur);
  } else {
    if (parseInt(cur) > max) {
      max = parseInt(cur);
    } else if (parseInt(cur) < min) {
      min = parseInt(cur);
    }
  }
});
console.log(min, max);
