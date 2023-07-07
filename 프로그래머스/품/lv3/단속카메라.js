function solution(routes) {
  var answer = 0;
  let latest = -30000;
  routes.sort((a, b) => a[1] - b[1]);

  routes.map(([start, end]) => {
    if (start > latest) {
      answer += 1;
      latest = end;
    }
  });

  return answer;
}
