/*
조건식을 이중반복문으로 돌리면서 모든 교점을 구한다.
교점 array의 y의 최대/최솟값, x의 최대/최솟값을 구한다.
각각 y의 최댓값-최솟값, x의 최댓값-최솟값 length를 가진 이중배열을 정의하고, .으로 채운다.
교점 array를 돌리면서 위 이중배열에서 해당하는 idx를 *로 바꾼다.
안쪽 배열을 join하고 리턴한다.

*/

//교점 구하는 식
const getNode = (line, i, j, visited) => {
  visited[i][j] = true;
  visited[j][i] = true;

  const [a, b, e] = line[i];
  const [c, d, f] = line[j];

  const mother = a * d - b * c;
  if (mother === 0) return;
  const x = (b * f - e * d) / mother;
  const y = (e * c - a * f) / mother;

  if (Number.isInteger(x) && Number.isInteger(y)) {
    return [x, y];
  }
};

function solution(line) {
  const nodeArr = [];
  const visited = Array.from(Array(line.length), () =>
    Array(line.length).fill(false)
  );

  let xMax, yMax, xMin, yMin;

  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < line.length; j++) {
      if (visited[i][j]) continue;
      const node = getNode(line, i, j, visited);
      if (!!node) {
        nodeArr.push(node);
        const [x, y] = node;
        xMax = Math.max(xMax === undefined ? x : xMax, x);
        yMax = Math.max(yMax === undefined ? y : yMax, y);
        xMin = Math.min(xMin === undefined ? x : xMin, x);
        yMin = Math.min(yMin === undefined ? y : yMin, y);
      }
    }
  }

  //별 찍을 이중배열 정의
  const starArr = Array.from(Array(yMax - yMin + 1), () =>
    Array(xMax - xMin + 1).fill(".")
  );

  nodeArr.map(([x, y]) => {
    const arrX = x - xMin;
    const arrY = yMax - y;
    starArr[arrY][arrX] = "*";
  });

  const answer = starArr.map((star) => {
    return star.join("");
  });

  return answer;
}
