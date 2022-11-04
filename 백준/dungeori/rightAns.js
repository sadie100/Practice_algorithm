let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().split("\n");

let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
  let curScore = 0;
  let score = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      curScore++;
    } else {
      curScore = 0;
    }
    score += curScore;
  }
  console.log(score);
}
