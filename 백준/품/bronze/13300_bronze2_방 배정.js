//13300 방 배정
const fs = require("fs");
const [first, ...students] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [stuCnt, roomCnt] = first.split(" ").map(Number);
const division = Array.from(new Array(7), () => Array(2).fill(0));

for (const line of students) {
  const [gender, year] = line.split(" ").map(Number);
  division[year][gender] += 1;
}

let answer = 0;
for (const room of division.flat()) {
  answer += Math.ceil(room / roomCnt);
}

console.log(answer);
