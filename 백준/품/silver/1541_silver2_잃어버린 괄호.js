/**
 반례 처리를 위해 모든 숫자를 Number('숫자') 형식으로 변경한다.
 식에서 -이 없으면 그대로 식 값 반환한다
 있으면, -의 앞뒤에 무조건 괄호가 나오도록 replace한다
 (+로 이어진 수식들을 괄호로 묶기 위해서임)
 식의 맨 앞과 맨 뒤에 각각 (와 )을 추가한다
 */

const fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim();

input = input.replaceAll("+", "')+Number('");
input = "(Number('".concat(input, "'))");
input = input.replaceAll("-", "'))-(Number('");

console.log(eval(input));
