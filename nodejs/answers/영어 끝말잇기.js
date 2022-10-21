/*
단순하게 반복문 돌리면서 끝말잇기 규칙 검사, 틀린 경우 나오면 사람/차례 구하기
사람/차례 구하는 법 :
    사람 : 틀린 경우의 words 내 index % n+1
    차례 : 틀린 경우의 words 내 index/n 자연수

*/

function solution(n, words) {
  let lastword = "";
  let hadWord = [];

  for (let i = 0; i < words.length; i++) {
    if (hadWord.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n + 1)];
    }

    const charArr = words[i].split("");

    if (!!lastword && lastword !== charArr[0]) {
      return [(i % n) + 1, Math.floor(i / n + 1)];
    }

    hadWord.push(words[i]);
    lastword = charArr[charArr.length - 1];
  }

  return [0, 0];
}
