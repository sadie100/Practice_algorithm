const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const N = input[0];
const seq = input[1].split(" ").map(Number);

const stack = [];
const answer = new Array(N).fill(0);

for (let j = 0; j < N; j++) {
  let num = seq[j];
  while (stack.length > 0 && num > stack[stack.length - 1][1]) {
    const [index, val] = stack.pop();
    answer[index] = num;
  }
  stack.push([j, num]);
}
while (stack.length > 0) {
  const [index, val] = stack.pop();
  answer[index] = -1;
}

console.log(answer.join(" "));
