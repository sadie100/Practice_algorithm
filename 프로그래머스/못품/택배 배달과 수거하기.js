function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  const deliverNum = deliveries.reduce((cur, acc) => cur + acc, 0);
  const pickupNum = deliveries.reduce((cur, acc) => cur + acc, 0);

  const dfs = (idx, hand, dist, toDeliver, toPickup) => {
    if (toDeliver === 0 && toPickup === 0) {
      //택배 끝남
      const finalDist = idx + 1;
      answer = Math.min(answer, finalDist);
    }
  };

  return answer;
}
