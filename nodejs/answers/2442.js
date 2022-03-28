let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split(" ");

let num = Number(input);
let starArray = [];
let ans = "";

for (let i = 1; i <= num; i++) {
  starArray.push(2 * i - 1);
}

starArray.map((st, idx) => {
  let star = "";
  let space = "";
  let spaceNum = 2 * num - 1 - st;
  let halfSpace = spaceNum / 2;
  for (let i = 1; i <= halfSpace; i++) {
    space += " ";
  }
  for (let i = 1; i <= st; i++) {
    star += "*";
  }
  if (idx === starArray.length - 1) {
    ans += space + star;
  } else {
    ans += space + star + "\n";
  }
});

console.log(ans);
