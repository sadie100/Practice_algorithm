function solution(answers) {
  var answer = [];

  let a = 0,
    b = 0,
    c = 0;

  answers.map((ans, idx) => {
    //a의 정답 : idx%5
    if (ans == (idx % 5) + 1) {
      a += 1;
    }
    //b의 정답 : [2,1,2,3,2,4,2,5][idx%8]
    if (ans == [2, 1, 2, 3, 2, 4, 2, 5][idx % 8]) {
      b += 1;
    }
    //c의 정답 : [3,3,1,1,2,2,4,4,5,5][idx%10]
    if (ans == [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][idx % 10]) {
      c += 1;
    }
  });

  const answerArr = [
    { name: 1, score: a },
    { name: 2, score: b },
    { name: 3, score: c },
  ].sort((a, b) => b.score - a.score);

  answer.push(answerArr[0].name);
  if (answerArr[0].score === answerArr[1].score) {
    answer.push(answerArr[1].name);
    if (answerArr[1].score === answerArr[2].score) {
      answer.push(answerArr[2].name);
    }
  }

  return answer;
}
