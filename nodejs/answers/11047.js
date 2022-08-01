const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

let [coinCount, totalPrice] = input[0].split(" ").map((d) => +d);
input.shift();
const coins = input.map((d) => Number(d));

let num = 0;
for (let i = coinCount - 1; i >= 0; i--) {
  if (coins[i] > totalPrice) {
    continue;
  }
  num += Number.parseInt(totalPrice / coins[i]);
  totalPrice %= coins[i];
  if (totalPrice === 0) {
    break;
  }
}

console.log(num);
