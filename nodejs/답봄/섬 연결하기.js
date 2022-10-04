/*
크루스칼 알고리즘 이용
-> 섬 통행 비용을 오름차순으로 정렬
사이클 테이블 cycle 정의(기본 : 루트 노드를 담은 배열)
costs에서 맨 첫번째 원소 빼내면서 answer에 추가. 이때 parent 확인해서 루트가 같지 않을 때만 추가하기
사이클 테이블이 모두 이어지거나 costs를 다 빼냈으면 종료
*/

function solution(n, costs) {
  const graph = Array.from({ length: n }, () => []);
  const root = Array.from({ length: n }, (d, idx) => idx);
  let answer = 0;

  //costs 정렬
  costs = costs.sort(([start1, end1, cost1], [start2, end2, cost2]) => {
    return cost1 - cost2;
  });

  const getRoot = (x) => {
    if (root[x] !== x) {
      return (root[x] = getRoot(root[x]));
    } else {
      return x;
    }
  };

  while (costs.length > 0) {
    const [start, end, cost] = costs.shift();
    if (getRoot(start) === getRoot(end)) continue;

    answer += cost;
    const startRoot = getRoot(start);
    const endRoot = getRoot(end);

    if (startRoot < endRoot) root[endRoot] = startRoot;
    else root[startRoot] = endRoot;

    if (new Set(root).length === 1) return answer;
  }
  return answer;
}
