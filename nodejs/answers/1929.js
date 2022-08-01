//에라토스테네스의 체
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split(" ");

const start = Number(input[0]);
const end = Number(input[1]);

let isDecimal = new Array(end + 1);
isDecimal.fill(true);

isDecimal[1] = false;
for (let j = 2; j * j <= end; j++) {
  if (isDecimal[j]) {
    for (let i = j * j; i <= end; i++) {
      if (i % j === 0 && i !== j) {
        isDecimal[i] = false;
      }
    }
  }
}

for (let i = start; i <= end; i++) {
  if (isDecimal[i]) console.log(i);
}
