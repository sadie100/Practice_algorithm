const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

let number = parseInt(input);

const facFunc = function (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * facFunc(num - 1);
  }
};

console.log(facFunc(number));
