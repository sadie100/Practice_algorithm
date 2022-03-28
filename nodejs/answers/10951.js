const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

let num = 0;
while (!!input[num]) {
  const test = input[num].split(" ");
  console.log(Number(test[0]) + Number(test[1]));
  num++;
}
