/**
우선 lost와 reserve에 동시에 존재하는 원소를 제거한다
lost를 복사해서 restArray를 만든다
lost 반복 돌린다
    도난당한 학생-1이 reserve에 있는지 확인한다
    있으면 reserve와 restArray에서 뺀다
    없으면, 도난당한 학생+1이 reserve에 있는지 확인한다
    있으면 reserve와 restArray에서 뺀다
    없으면 넘어간다

(n-restArray의 length)를 리턴한다
**/

function solution(n, lost, reserve) {
  const lostArray = lost
    .filter((data) => !reserve.includes(data))
    .sort((a, b) => a - b);
  const reserveArray = reserve.filter((data) => !lost.includes(data));
  const restArray = [...lostArray];
  for (let i = 0; i < lostArray.length; i++) {
    const student = lostArray[i];
    if (reserveArray.includes(student - 1)) {
      restArray.splice(restArray.indexOf(student), 1);
      reserveArray.splice(reserveArray.indexOf(student - 1), 1);
    } else if (reserveArray.includes(student + 1)) {
      restArray.splice(restArray.indexOf(student), 1);
      reserveArray.splice(reserveArray.indexOf(student + 1), 1);
    }
  }

  return n - restArray.length;
}
