//5397 키로거

const fs = require("fs");
let [testNum, ...cases] = fs.readFileSync("input.txt").toString().split("\n");

testNum = Number(testNum);
for (let test of cases) {
  const before = [];
  const after = [];
  for (let letter of test.split("")) {
    switch (letter) {
      case "<":
        if (before.length > 0) {
          const end = before.pop();
          after.push(end);
        }
        break;
      case ">":
        if (after.length > 0) {
          const first = after.pop();
          before.push(first);
        }
        break;
      case "-":
        if (before.length > 0) {
          before.pop();
        }
        break;
      default:
        before.push(letter);
        break;
    }
  }

  console.log(before.join("") + after.reverse().join(""));
}
