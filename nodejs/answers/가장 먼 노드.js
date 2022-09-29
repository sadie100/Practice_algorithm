/*
 간선정보를 바탕으로 그래프화한 graph를 정의한다.
 방문한 그래프를 체크하는 visited를 정의한다.
 그래프의 노드를 탐색하는 search 함수를 정의한다.
 각 노드의 거리 정보를 넣을 distance를 정의한다.
 순서대로 처리할 큐를 정의하고 첫 번째로 처리할 노드(1)정보를 담는다.
 queue가 빌 때까지 search를 돌린다.
    search는 queue로부터 현재 노드정보와 탐색 횟수를 받는다.
    distance의 현재 노드번째 원소에 탐색 횟수를 넣는다.
    graph와 visited를 참고하여 탐색할 노드가 있으면 탐색 횟수를 1씩 증가시켜서 queue에 push한다.
distance에서 최대값을 구하고 해당 값을 가진 원소의 개수를 리턴한다.

*/

function solution(n, edge) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, (x) => []);

  edge.map(([n1, n2]) => {
    if (!graph[n1].includes(n2)) graph[n1].push(n2);
    if (!graph[n2].includes(n1)) graph[n2].push(n1);
  });
  const visited = Array.from({ length: n + 1 }, (x) => false);
  const distance = Array.from({ length: n + 1 }, (x) => 0);
  const queue = [[1, 0]];

  const search = (node, count) => {
    if (visited[node]) return;
    visited[node] = true;
    distance[node] = count;

    const notGone = graph[node]
      .filter((d) => !visited[d])
      .map((d) => [d, count + 1]);
    queue.push(...notGone);
  };

  while (queue.length > 0) {
    const [node, count] = queue.shift();
    search(node, count);
  }

  const max = Math.max(...distance);

  answer = distance.filter((d) => d === max).length;
  return answer;
}
