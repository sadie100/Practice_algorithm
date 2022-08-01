const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const total = Number(input[0]);
let timeArray = input[1].split(" ").map((d) => Number(d));
timeArray = timeArray.sort((a, b) => a - b);

let time = 0;
for (let i = 0; i < total; i++) {
  time += timeArray[i] * (total - i);
}

console.log(time);
