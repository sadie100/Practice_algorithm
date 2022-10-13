/*
필요한 value를 return하는 이진 변환 함수를 정의한 뒤, 문자열이 1이 될 때까지 해당 함수를 돌린다.
마지막에 나온 값을 return한다.

이진 변환 함수 => 
    1. s의 length를 받고, 0을 제거한 뒤 length를 받는다. 두 값의 차이가 0의 개수이다.
    2. 0을 제거한 string의 길이를 2진법으로 변경하고 다시 문자열로 바꾼다.
    1과 2, 시행횟수+1을 return한다.
*/

const change = ({ str, count, reducedZero }) => {
  let strLength = str.length;
  let result = str.replaceAll("0", "");
  reducedZero += strLength - result.length;

  result = result.length.toString(2);

  return {
    str: result,
    count: count + 1,
    reducedZero,
  };
};

function solution(s) {
  let result = {
    str: s,
    count: 0,
    reducedZero: 0,
  };

  while (result.str !== "1") {
    result = change(result);
  }

  return [result.count, result.reducedZero];
}
