const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

const chroa = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = input;

const getChroa = (text, word, count = 0) => {
  if (text.indexOf(word) === -1) {
    result = result.replaceAll(word, "0");
    return count;
  } else if (text.indexOf(word) !== -1) {
    count++;
    return getChroa(text.replace(word, "0"), word, count);
  }
};

const nums = chroa.map((char) => {
  return getChroa(result, char);
});

console.log(
  nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0) + result.split("").filter((a) => isNaN(a)).length
);
