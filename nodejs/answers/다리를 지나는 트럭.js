/**
트럭 1대가 지나가는 데 걸리는 시간 : bridge_length초

truck_weights를 복사해서 대기 트럭 배열 waitingTruck을 정의한다.
현재 다리 상황을 알려주는 배열 onBridge를 정의한다.
onBridge = [
    { weight : 0,   //무게
      time : 0  //다리에서 지낸 시간
    },
    ...
]
waitingTruck이 빌 때까지 반복 돌린다.
    현재 onBridge를 검사한다.
    현재 truck을 넣어도 bridge_length 조건과 weight 조건을 위반하지 않는다면 onBridge에 넣는다.
    현재 onBridge에 있는 truck들의 time을 1 더한다.
    만약 onBridge에서 time이 bridge_length와 같거나 크다면 onBridge에서 뺀다.
    answer을 1 더한다.
    
**/

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const waitingTruck = truck_weights.slice();
  let onBridge = [];

  while (true) {
    onBridge.map((truck, idx) => {
      truck.time += 1;
    });
    onBridge = onBridge.filter((truck) => {
      return truck.time < bridge_length + 1;
    });
    const bridge_length_now = onBridge.length;
    const weight_now = onBridge.reduce((acc, cur) => {
      return acc + cur.weight;
    }, 0);
    const truck = waitingTruck[0];
    if (bridge_length_now < bridge_length && weight_now + truck <= weight) {
      onBridge.push({
        weight: truck,
        time: 1,
      });
      waitingTruck.shift();
    }
    answer += 1;
    if (waitingTruck.length === 0 && onBridge.length === 0) {
      break;
    }
  }
  return answer;
}
