/**
결과를 담을 resultArr을 정의한다
resultArr은 Set객체를 value로 한 win, lose key를 갖고 있는 객체의 배열

results를 돌리면서 resultArr을 채운다

resultArr을 돌리면서 win, lose를 보충한다
=> n이 x를 win한 경우, x의 win들도 전부 n의 win에 추가되어야 한다
    반대로 x가 n에 lose한 경우, n의 lose들도 전부 x의 lose에 추가되어야 한다

위를 채우고, lose Set과 win Set의 길이가 n-1인 원소의 개수를 리턴한다.
**/

function solution(n, results) {
  var answer = 0;

  const resultArr = Array.from({ length: n + 1 }, () => {
    return { win: new Set(), lose: new Set() };
  });

  results.map(([win, lose]) => {
    resultArr[win].win.add(lose);
    resultArr[lose].lose.add(win);
  });

  resultArr.map(({ win, lose }, idx) => {
    for (let including of win) {
      if (resultArr[including].win.size === 0) continue;
      for (let i of resultArr[including].win) {
        resultArr[idx].win.add(i);
      }
    }
    for (let including of lose) {
      if (resultArr[including].lose.size === 0) continue;
      for (let i of resultArr[including].lose) {
        resultArr[idx].lose.add(i);
      }
    }
  });

  answer = resultArr.filter(
    (arr) => arr.win.size + arr.lose.size === n - 1
  ).length;
  return answer;
}
