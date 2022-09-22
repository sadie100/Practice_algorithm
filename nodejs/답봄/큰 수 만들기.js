/**
number를 k만큼 반복한다.
만약 number[i]가 number[i+1]보다 작으면, number[i]를 제거한다.

스택을 만든다.
number를 array화해서 반복한다.
스택이 비어 있으면 스택에 현재 num을 넣는다.
스택이 있으면 최상단 원소와 num을 비교한다.
    원소<num이면 원소를 빼고 num을 넣고 k를 1 제외한다.
**/

function solution(number, k) {
  var answer = "";
  const numArr = number.split("").map((d) => +d);
  const stack = [];

  for (let i = 0; i < numArr.length; i++) {
    while (k > 0 && stack[stack.length - 1] < numArr[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(numArr[i]);
  }

  stack.splice(stack.length - k);

  answer = stack.join("");

  return answer;
}
