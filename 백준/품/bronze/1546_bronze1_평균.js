const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const numArray = input[1].split(" ").map((num) => parseInt(num));

let total = 0;
let max = 0;
numArray.forEach((num) => {
  total += num;
  if (max === 0) {
    max = num;
  } else {
    if (max < num) {
      max = num;
    }
  }
});

const avg = ((total / max) * 100) / numArray.length;
console.log(avg);
