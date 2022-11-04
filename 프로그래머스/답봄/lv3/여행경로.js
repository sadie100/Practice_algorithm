/*
tickets를 sort()로 정렬
정답 담을 배열 answer와 방문기록 담을 배열 visited 정의
dfs 함수 정의
    현재 공항과 사용한 티켓 수를 파라미터로 받음
    재귀 종료 조건 : tickets의 수와 usedTicketNum이 같으면 재귀 종료
    tickets를 반복 돌리면서 인자값으로 들어온 공항을 출발지로 삼는 ticket 찾는다
    있을 경우 answer에 넣고 visited 처리한 후 재귀적으로 dfs 호출한다
    만약 재귀적으로 호출한 dfs가 true를 리턴하지 않으면(티켓을 다 처리하지 못한 경우), 해당 루트가 잘못되었다는 뜻
     => answer에서 넣었던 다음 공항을 빼고 visited도 false로 처리한다.
dfs에 ICN 돌린다
answer 리턴

*/

function solution(tickets) {
  var answer = [];
  const visited = Array.from({ length: tickets.length }, () => false);
  tickets.sort();

  const dfs = (airport, usedTicketNum) => {
    if (usedTicketNum === tickets.length) {
      return true;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] !== airport || visited[i]) continue;
      const togo = tickets[i][1];
      visited[i] = true;
      answer.push(togo);
      if (dfs(togo, usedTicketNum + 1)) return true;
      visited[i] = false;
      answer.pop();
    }

    return false;
  };

  answer.push("ICN");
  dfs("ICN", 0);

  return answer;
}
