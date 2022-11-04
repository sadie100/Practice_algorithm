const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

const num = Number(input);

// const getTen = (number) => {
//   let a = number;
//   let ten = 0;
//   while (a / 10 >= 1) {
//     a = a / 10;
//     ten++;
//   }
//   return ten;
// };
// const ten = getTen(num);

for (let min = 0; min < num; min++) {
  let numArr = min.toString().split("");
  let ans = 0;
  for (let n of numArr) {
    ans += Number(n);
  }
  ans += min;
  if (ans === num) {
    console.log(min);
    return;
  }
}

console.log(0);
