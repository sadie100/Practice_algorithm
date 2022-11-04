/*
cards에서 원소 하나씩 돌려보면서 최대값을 구한다.
원소를 받아서 일치할 때까지 다음 카드로 돌리는 dfs 정의
첫번째, 두번째 경우를 직접 원소 하나씩 받아보면서 최대값을 구한다.(완전탐색)
*/

function solution(cards) {
  const cardsCopy = [0, ...cards];
  let visited = [true, ...new Array(cards.length).fill(false)];
  const dfs = (card, count) => {
    if (visited[card]) {
      const cardsNow = cardsCopy.filter((d, idx) => {
        return visited[idx] === false;
      });
      return { cardsNow, count };
    }

    visited[card] = true;
    return dfs(cardsCopy[card], count + 1);
  };

  let answer = 0;
  for (let i = 0; i < cards.length; i++) {
    visited = [true, ...new Array(cards.length).fill(false)];
    let { cardsNow, count } = dfs(cards[i], 0);
    if (cardsNow.length === 0) {
      answer = Math.max(answer, 0);
      continue;
    }
    for (let j of cardsNow) {
      let { cardsNow: arr2, count: count2 } = dfs(cardsCopy[j], 0);
      answer = Math.max(answer, count * count2);
    }
  }
  return answer;
}
