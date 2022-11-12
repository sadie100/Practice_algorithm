let fs = require("fs");
let input = fs.readFileSync("test.txt").toString();

const num = Number(input);

let numArray = [];
for (let i = 1; i <= num; i++) {
  numArray.push(i);
}

const answer = numArray.reduce((acc, cur) => {
  for (let i = 0; i < cur; i++) {
    acc += "*";
  }
  acc += "\n";
  return acc;
}, "");
console.log(answer);
