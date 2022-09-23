/**
computers를 그래프 형태로 만든다.
n개만큼의 false를 가진 searched 배열을 만든다.

탐색함수 fs를 정의한다. 인자로 인덱스를 받는다.
    searched[idx]를 true로 만든다.
    그래프의 해당 인덱스 배열에 대해서도 fs를 돌린다.(단, searched[idx]가 false일 때만)

0부터 n-1까지 fs를 반복 돌린다. searched[i]가 false면 fs 돌린다.
한 번의 fs가 끝날 때마다 answer을 1 증가시킨다.
answer를 리턴한다.
**/

function solution(n, computers) {
  var answer = 0;
  const graph = computers.map((d) => []);
  const searched = computers.map((d) => false);
  //그래프 채우기
  computers.map((comp, idx) => {
    for (let i = 0; i < n; i++) {
      if (comp[i] === 1) graph[idx].push(i);
    }
  });

  //탐색하기
  const fs = (idx) => {
    searched[idx] = true;

    for (let d of graph[idx]) {
      if (!searched[d]) {
        fs(d);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!searched[i]) {
      fs(i);
      answer += 1;
    }
  }

  return answer;
}
