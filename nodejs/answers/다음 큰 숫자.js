/*
n이 하나이므로 완전탐색으로 푼다
while문 정의하고, n보다 수를 하나씩 증가시켜 나가면서 조건 1,2를 충족하는지 확인한다
만약 충족하면 반복문을 빠져나가고 answer로 해당 수를 리턴한다
*/

function solution(n) {
  var answer = 0;
  oneCount = n
    .toString(2)
    .split("")
    .filter((d) => d === "1").length;

  let num = n;
  while (true) {
    num += 1;
    count = num
      .toString(2)
      .split("")
      .filter((d) => d === "1").length;
    if (oneCount === count) {
      return (answer = num);
    }
  }
}
