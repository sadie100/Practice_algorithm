// 1919
const fs = require("fs");
const [word1, word2] = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((d) => d.trim());

const makeAnagram = (first, second) => {
  const firstAlpha = new Array(27).fill(0);
  const secondAlpha = new Array(27).fill(0);

  const startCode = "a".charCodeAt();
  for (let i = 0; i < first.length; i++) {
    firstAlpha[first.charCodeAt(i) - startCode] += 1;
  }
  for (let i = 0; i < second.length; i++) {
    secondAlpha[second.charCodeAt(i) - startCode] += 1;
  }

  let answer = 0;
  for (let i = 0; i < 27; i++) {
    if (firstAlpha[i] !== secondAlpha[i]) {
      answer += Math.abs(firstAlpha[i] - secondAlpha[i]);
    }
  }
  return answer;
};

const answer = makeAnagram(word1, word2);
console.log(answer);
