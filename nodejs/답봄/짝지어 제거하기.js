/*
스택을 이용해서 풀기
stack 배열 정의
s를 반복문으로 돌리면서 체크
    만약 현재 char이 stack의 맨 뒤 문자열과 같다면 => 맨 뒤 원소 빼고 다음으로 넘김
    만약 다르다면 => 스택에 추가
끝난 후 스택이 비면 1 반환
*/

function solution(s) {
  var answer = 0;
  const stack = [];
  for (let char of s) {
    if (char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  if (stack.length === 0) {
    answer = 1;
  }

  return answer;
}
