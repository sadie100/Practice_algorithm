/*
citations를 내림차순으로 정렬한다
citations의 가장 큰 수부터 1까지 for문 돌리기
    filter를 걸어서 i보다 크거나 같은 경우만 남긴다
    개수가 i번 이상이면 answer로 i를 리턴한다. 아니면 계속 돌린다
*/

function solution(citations) {
  var answer = 0;
  citations = citations.sort((a, b) => b - a);
  const max = citations[0];

  for (let i = max; i >= 1; i--) {
    const h_array = citations.filter((element) => element >= i);
    if (h_array.length >= i) {
      return (answer = i);
    }
  }

  return answer;
}
