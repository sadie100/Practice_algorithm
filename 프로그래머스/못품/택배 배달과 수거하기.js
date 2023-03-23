function solution(cap, n, deliveries, pickups) {
  var answer = -1;

  const toDeliver = deliveries.reduce((acc, cur, idx) => {
    // deliverLeft += cur;
    if (cur > 0) {
      return [...acc, [idx, cur]];
    } else {
      return acc;
    }
  }, []);
  const toPickup = pickups.reduce((acc, cur, idx) => {
    // pickupLeft += cur;
    if (cur > 0) {
      return [...acc, [idx, cur]];
    } else {
      return acc;
    }
  }, []);

  let walk = 0;
  let now = 0;
  while (toDeliver.length > 0 || toPickup.length > 0) {
    let box = cap;
    let empty = 0;
    //배송
    while (box > 0 && toDeliver.length > 0) {
      const [idx, del] = toDeliver.pop();
      if (del > box) {
        //남은 택배 있음
        toDeliver.push([idx, del - box]);
        box = 0;
      } else {
        box -= del;
      }
      if (now < idx + 1) {
        walk += idx + 1 - now;
        now = idx + 1;
      }
    }
    //수거
    box = 0;
    while (empty + box < cap && toPickup.length > 0) {
      const left = cap - empty;
      const [idx, pic] = toPickup.pop();
      if (pic > left) {
        //남는 수거 있음
        toPickup.push([idx, pic - left]);
        empty = cap;
      } else {
        empty += pic;
      }
      if (idx + 1 > now) {
        walk += idx + 1 - now;
        now = idx + 1;
      }
    }

    //본진 귀환
    walk += now;
    now = 0;
  }

  return walk;
}
