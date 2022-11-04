const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const num = Number(input[0]);
const candidate = [];
for (let i = 1; i <= num; i++) {
  const a = input[i].split(" ");
  candidate.push({
    weight: Number(a[0]),
    height: Number(a[1]),
  });
}
const findRank = ({ weight, height }) => {
  let rank = 0;
  for (let i = 0; i < num; i++) {
    if (candidate[i].weight > weight && candidate[i].height > height) {
      rank++;
    }
  }
  return rank + 1;
};

let ans = "";
for (let i = 0; i < num; i++) {
  ans += findRank(candidate[i]);
  ans += " ";
}

console.log(ans);
