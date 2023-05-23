//3015 오아시스 재결합
const fs = require("fs");
const [N, ...heights] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let ans = 0;
const stack = [];
for (let height of heights) {
  let flag =
    stack.length > 0 && stack[stack.length - 1][0] === height ? true : false;
  while (stack.length > 0 && stack[stack.length - 1][0] < height) {
    const [popped, cnt] = stack.pop();
    ans += cnt;
    // console.log("height", height, "pop. ans", ans);
  }

  if (stack.length > 0) {
    ans += 1;
    // console.log("plus", stack[stack.length - 1][1]);
    // console.log("height", height, "ans", ans);
  }
  if (flag) {
    // console.log("duplicate", height);
    stack[stack.length - 1][1] += 1;
  }
  stack.push([height, 1]);
}

console.log(ans);
/*
2 0 
4 1
1 2
2 4
2 6
5 9
1 10
*/
