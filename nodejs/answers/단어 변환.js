/**
만약 words에 target이 없을 경우 0 리턴한다.
한 번 거쳐간 word정보를 저장할 passedWords를 정의한다.

words에서 begin과 하나의 문자만 다르고 나머지 문자가 같으면서 아직 passed되지 않은 word를 찾는다.
그런 word가 있으면 해당 word로 변환 후 계속 위 동작을 반복한다. count는 위 동작을 나타내는 재귀함수의 파라미터로 전달해서 1씩 올린다.
만약 들어온 word가 target과 같아지면 answerList에 count를 push한다.

안 되면 0 리턴한다.
**/

function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) return 0;

  const beginArr = begin.split("");
  const wordsList = words.map((word) => {
    return word.split("");
  });
  const passedWords = words.map(() => false);
  const answerList = [];

  const fc = (word, num) => {
    if (word.join("") === target) {
      return (answer = num);
    }

    const canChange = wordsList.filter((comparingWord, comparingIdx) => {
      const change = word.reduce((acc, cur, idx) => {
        if (cur !== comparingWord[idx]) acc += 1;
        return acc;
      }, 0);
      return change === 1 && passedWords[comparingIdx] === false;
    });

    if (canChange.length > 0) {
      for (let changing of canChange) {
        const idx = wordsList.indexOf(changing);
        passedWords[idx] = true;
        fc(changing, num + 1);
      }
    } else {
      return;
    }
  };
  fc(beginArr, 0);

  return answer;
}
