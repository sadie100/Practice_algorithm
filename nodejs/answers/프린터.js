/*** 바로바로 최대값을 뽑는 방식
    priorities의 index만 뽑아서 복사한 배열 indexArr을 만든다.
    priorities를 복사해서 배열 sample을 만든다.
    sample의 length가 0이 될 때까지 반복문을 돌린다.

    중요도가 제일 높은 문서를 프린트 처리하도록 한다.
    현재 sample의 최대 숫자를 Math.max로 구해서 maxNum에 넣는다.
    sample에서 maxNum의 indexOf를 구한다. 해당 인덱스의 문서가 프린트 대상 문서이다.
    answer를 1 올린다.
   만약 프린트 대상 문서가 내가 요청한 문서일 시, 반복문을 깨고 answer를 리턴한다.
      아닐 시 indexArr과 priorities를 프린트된 문서를 빼고 재정의해야 한다.
    0에서 프린트 대상 문서의 인덱스까지 반복문을 돌리고,
    sample과 indexArr의 원소를 shift & push 하여 앞에 있는 원소가 뒤에 넣어지도록 한다.
    그러나 프린트 대상 원소는 shift 처리만 해서 배열에서 제거한다.
***/

function solution(priorities, location) {
  var answer = 0;
  let sample = [...priorities];
  const indexArr = priorities.map((d, idx) => idx);

  while (sample.length > 0) {
    let maxNum = Math.max(...sample);
    const nextPrint = sample.indexOf(maxNum);
    answer += 1;
    if (location === indexArr[nextPrint]) {
      break;
    }
    for (let i = 0; i <= nextPrint; i++) {
      const a = sample.shift();
      const b = indexArr.shift();
      if (i === nextPrint) {
        break;
      }
      sample.push(a);
      indexArr.push(b);
    }
  }

  return answer;
}
