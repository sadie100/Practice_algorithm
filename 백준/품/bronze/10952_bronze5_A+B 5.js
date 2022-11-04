const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

let num = 0;
while (
  !(input[num].split(" ")[0] === "0" && input[num].split(" ")[1] === "0")
) {
  const arr = input[num].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
  num++;
}
