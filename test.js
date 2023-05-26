//6549 히스토그램에서 가장 큰 직사각형

const fs = require("fs");
const cases = fs.readFileSync("input.txt").toString().trim().split("\n");

cases.map((test) => {
  if (test.trim() === "0") {
    return;
  }
  let maxi = 0;
  const stack = [];
  const [n, ...heights] = test.split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    let height = heights[i];
    if (stack.length === 0 || heights[stack[stack.length - 1]] <= height) {
      stack.push(i);
    } else {
      while (stack.length > 0 && heights[stack[stack.length - 1]] > height) {
        let poppedIdx = stack.pop();
        if (stack.length === 0) {
          maxi = Math.max(i * heights[poppedIdx], maxi);
        } else {
          maxi = Math.max((i - poppedIdx) * heights[poppedIdx], maxi);
        }
      }
      stack.push(i);
    }
  }
  while (stack.length > 0) {
    const poppedIdx = stack.pop();
    if (stack.length === 0) {
      maxi = Math.max(n * heights[poppedIdx], maxi);
    } else {
      maxi = Math.max((n - poppedIdx) * heights[poppedIdx], maxi);
    }
  }
  console.log(maxi);
});
