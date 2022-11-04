let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split("\n");

let firstArr = input[0].split(" ");
let secondArr = input[1].split(" ");

const x = Number(firstArr[1]);
let ans = [];

secondArr.forEach((num) => {
  let number = Number(num);
  if (number < x) {
    ans.push(number);
  }
});

let ansToString = ans.join(" ");

console.log(ansToString);
