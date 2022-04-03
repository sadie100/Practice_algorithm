const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

let ans = "";
alphabets.forEach((cha) => {
  ans += input.indexOf(cha);
  ans += " ";
});

console.log(ans);
