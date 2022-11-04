const fs = require("fs");
const input = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((d) => Number(d));

const sangsoo = (num) => {
  const numArr = num.toString().split("");
  let ans = "";
  for (let i = numArr.length - 1; i >= 0; i--) {
    ans += numArr[i];
  }
  return Number(ans);
};

const one = sangsoo(input[0]);
const two = sangsoo(input[1]);
if (one > two) console.log(one);
else console.log(two);
