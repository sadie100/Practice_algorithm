const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString());

let answer = input;
let cycle = 0;
do {
  const ten = parseInt(answer / 10);
  const one = answer % 10;

  answer = one * 10 + ((ten + one) % 10);
  cycle++;
} while (answer !== input);

console.log(cycle);
