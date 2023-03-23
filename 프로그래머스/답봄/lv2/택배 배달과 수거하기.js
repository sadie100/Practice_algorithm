function solution(cap, n, deliveries, pickups) {
  let deliverAcc = cap,
    pickupAcc = cap;
  let movedArea = 0;
  for (let i = n - 1; i >= 0; i--) {
    deliverAcc += deliveries[i];
    pickupAcc += pickups[i];

    while (deliverAcc > cap || pickupAcc > cap) {
      deliverAcc -= cap;
      pickupAcc -= cap;
      movedArea += (i + 1) * 2;
    }
  }
  return movedArea;
}
