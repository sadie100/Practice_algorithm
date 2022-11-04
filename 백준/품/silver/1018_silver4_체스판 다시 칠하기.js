const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const number = input[0].split(" ");
const N = Number(number[0]); //row 수
const M = Number(number[1]); //컬럼 수

let smallest_num = -1;

for (let i = N - 8; i >= 0; i--) {
  for (let j = M - 8; j >= 0; j--) {
    //첫번째를 검은색으로 만들 때
    let square_b = 0;
    //첫번째를 하얀색으로 만들 때
    let square_w = 0;
    for (let a = i; a < i + 8; a++) {
      const row = input[a + 1].split("");
      for (let b = j; b < j + 8; b++) {
        if (b % 2 === 0) {
          //첫번째가 검은색으로 시작하는 경우
          if (row[b] === "B") {
            if (a % 2 === 0) square_w++;
            else square_b++;
          } else if (row[b] === "W") {
            if (a % 2 === 0) square_b++;
            else square_w++;
          }
        } else {
          if (row[b] === "W") {
            if (a % 2 === 0) square_w++;
            else square_b++;
          } else if (row[b] === "B") {
            if (a % 2 === 0) square_b++;
            else square_w++;
          }
        }
      }
    }
    let smaller_num = square_b > square_w ? square_w : square_b;
    if (smallest_num === -1) {
      //등록
      smallest_num = smaller_num;
    } else {
      if (smaller_num < smallest_num) smallest_num = smaller_num;
    }
  }
}

console.log(smallest_num);
