const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split(" ");

const first = parseInt(input[0]);
const second = parseInt(input[1]);
const third = parseInt(input[2]);

let money;

if (first === second && first === third && second === third) {
  money = 10000 + first * 1000;
} else if (first !== second && first !== third && second !== third) {
  if (first >= second && first >= third) {
    money = first * 100;
  } else if (second >= first && second >= third) {
    money = second * 100;
  } else {
    money = third * 100;
  }
} else {
  if (first === second) {
    money = 1000 + second * 100;
  } else {
    money = 1000 + third * 100;
  }
}

console.log(money);
