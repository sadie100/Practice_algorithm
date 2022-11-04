/*
1000 - 낸 돈을 변수에 저장
500, 100, 50, 10, 5 순으로 나누고, 몫을 answer에 더하고, 나머지를 다음 수로 나눈다

*/

const fs = require("fs");
const change = 1000 - Number(fs.readFileSync("test.txt").toString().trim());

let money = change;
let answer = 0;
const coinArr = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < 6; i++) {
  answer += parseInt(money / coinArr[i], 10);
  money = money % coinArr[i];
  if (money === 0) break;
}

console.log(answer);
