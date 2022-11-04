/**
numbers로 온 애들을 String화해서 내림차순 정렬하고 join해서 리턴한다.
정렬 기준 : 두 연달아 오는 숫자 string a,b를 a+b로 붙이는 게 큰지 b+a로 붙이는 게 큰지
ex: a=10,b=4일때 a+b => 104, b+a => 410

반례를 신경써야 한다 => 만약 answer가 0으로만 이루어진 배열이면 0 리턴해야 함
**/

function solution(numbers) {
  var answer = "";
  answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer.split("")[0] === "0" ? "0" : answer;
}
