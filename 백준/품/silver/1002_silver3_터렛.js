/*
좌표 사이의 거리 : ((x2-x1)^2 + (y2-y1)^2)루트

if. 좌표 사이의 거리 === 0 && r1===r2 => -1

좌표 사이의 거리 > r1 + r2 => 0
좌표 사이의 거리 < r2-r1 => 0
좌표 사이의 거리 ===0 => 0

좌표 사이의 거리 === r1+r2 => 1
좌표 사이의 거리 === r2-r1의 절댓값 => 1
좌표 사이의 거리 < r1+r2 => 2

*/

const fs = require("fs");
const [n, ...cases] = fs.readFileSync("test.txt").toString().trim().split("\n");

for (let i = 0; i < +n; i++) {
  const [x1, y1, r1, x2, y2, r2] = cases[i].split(" ").map(Number);
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (distance === 0 && r1 === r2) {
    console.log(-1);
  } else if (
    distance === 0 ||
    distance > r1 + r2 ||
    distance < Math.abs(r2 - r1)
  ) {
    console.log(0);
  } else if (distance === r1 + r2 || distance === Math.abs(r2 - r1)) {
    console.log(1);
  } else if (distance < r1 + r2) {
    console.log(2);
  }
}
