const fs = require("fs");
const [n, ...numbers] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

numbers.reverse();
const proto = [];
let now = 1;
let answer = "";

while (numbers.length > 0) {
  if (now > n && numbers[numbers.length - 1] !== proto[proto.length - 1]) {
    answer = "NO";
    break;
  }
  if (numbers[numbers.length - 1] === proto[proto.length - 1]) {
    numbers.pop();
    proto.pop();
    answer += "-\n";
    continue;
  }
  proto.push(now);
  answer += "+\n";
  now += 1;
}

console.log(answer.trim());
