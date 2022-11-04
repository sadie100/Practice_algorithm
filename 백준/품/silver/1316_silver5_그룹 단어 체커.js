const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let result = 0;

for (let i = 1; i < input.length; i++) {
  const charArr = input[i].split("");
  let flag = true;

  charArr.forEach((char) => {
    if (charArr.indexOf(char) !== charArr.lastIndexOf(char)) {
      const sliced = charArr.slice(
        charArr.indexOf(char),
        charArr.lastIndexOf(char) + 1
      );
      const getSlicedEl = [...new Set(sliced)];
      if (getSlicedEl.length !== 1) {
        flag = false;
      }
    }
  });
  if (flag) result++;
}

console.log(result);
