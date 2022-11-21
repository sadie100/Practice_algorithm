const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const num = input.shift();
let arr = input.map((d) => d.split(" ").map((a) => Number(a)));
arr = arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
console.log(arr);
let result = 0,
  recentEnd = 0;
arr.forEach(([start, end], idx) => {
  if (recentEnd > start) {
    return;
  }
  result++;
  recentEnd = end;
});
console.log(result);
