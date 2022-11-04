/*
2차원 배열의 원소들 중 큰 원소랑 작은 원소 분리
큰 원소의 max * 작은 원소의 max 리턴
*/

function solution(sizes) {
  var answer = 0;

  const long = [];
  const short = [];

  const newSize = sizes.map((size) => {
    long.push(Math.max(...size));
    short.push(Math.min(...size));
  });

  return (answer = Math.max(...long) * Math.max(...short));
}
