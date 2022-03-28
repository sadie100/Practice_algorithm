const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const num = Number(input[0]) * Number(input[1]) * Number(input[2]);

const numToString = num.toString();
const numArray = numToString.split("");
let answer = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};
numArray.forEach((num) => {
  for (let i = 0; i < 10; i++) {
    if (num === i.toString()) {
      return answer[i]++;
    }
  }
});
Object.values(answer).forEach((ans) => {
  console.log(ans);
});
