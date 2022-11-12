const fs = require("fs");
let input = fs.readFileSync("../test.txt").toString().split("\n");

input.shift();

const answers = input.map((ques) => {
  const quesArray = ques.split("");
  let curScore = 0;
  const answer = quesArray.reduce((acc, cur, idx) => {
    if (cur === "O") {
      curScore++;
      return acc + curScore;
    } else if (cur === "X") {
      curScore = 0;
      return acc;
    }
  }, 0);
  return answer;
});

if (answers.length === 0) {
  console.log(0);
} else {
  answers.forEach((ans) => console.log(ans));
}
