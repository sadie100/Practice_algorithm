//1158 요세푸스 문제
const fs = require("fs");
const [N, K] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const used = new Array(N + 1).fill(false);
let count = 0;
const answer = [];
let remain = N;

while (true) {
  for (let i = 1; i <= N; i++) {
    if (used[i]) {
      continue;
    }
    count += 1;
    if (count === K) {
      answer.push(i);
      used[i] = true;
      count = 0;
      remain -= 1;
    }
    if (remain === 0) {
      console.log(`<${answer.join(", ")}>`);
      return;
    }
  }
}
