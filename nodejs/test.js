const fs = require("fs");
const [test, ...bridge] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
};

bridge.map((brid) => {
  const [west, east] = brid.split(" ").map(Number);
  const max = Math.max(west, east);
  const min = Math.min(west, east);
  console.log(
    Math.round(factorial(max) / (factorial(min) * factorial(max - min)))
  );
});
