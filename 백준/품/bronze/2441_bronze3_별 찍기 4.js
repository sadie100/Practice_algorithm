let fs = require("fs");
let input = fs.readFileSync("test.txt").toString();

let num = Number(input);
let ans = "";
let star = "";
let space = "";

for (let i = num; i > 0; i--) {
  for (let j = 0; j < num - i; j++) {
    space += " ";
  }
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  ans += space + star + "\n";
  space = "";
  star = "";
}

console.log(ans);
