const fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split("\n");

input.shift();

input.map((ques) => {
  const quesArray = ques.split("");
  let curScore = 0;
  const answer = quesArray.reduce((acc, cur, idx) => {
    if (cur === "O") {
      curScore++;
      return acc + curScore;
    } else {
      curScore = 0;
      return acc;
    }
  }, 0);
  console.log(answer);
});
