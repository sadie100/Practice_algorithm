let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split(" ");

const num = Number(input);
const starArray = [];
const totalNum = 2 * num - 1;
let ans = "";

for (let i = num; i > 0; i--) {
  starArray.push(2 * i - 1);
}

starArray.forEach((st) => {
  let star = "";
  let blank = "";
  for (let i = 0; i < (totalNum - st) / 2; i++) {
    blank += " ";
  }
  for (let i = 0; i < st; i++) {
    star += "*";
  }

  ans += blank + star + "\n";
  star = "";
  blank = "";
});

console.log(ans);
