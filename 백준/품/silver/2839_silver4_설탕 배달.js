const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

const num = Number(input);

let count = 0;
let sugar = num;

while (true) {
  if (sugar % 5 === 0) {
    count += sugar / 5;
    break;
  }
  if (sugar < 3) {
    count = -1;
    break;
  }
  sugar -= 3;
  count++;
}

console.log(count);
