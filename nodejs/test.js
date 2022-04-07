const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("");

const arr = [
  2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];

const a_idx = "A".charCodeAt(0);

console.log(
  input.reduce((acc, cur) => {
    return (acc += arr[cur.charCodeAt(0) - a_idx] - 1 + 2);
  }, 0)
);
