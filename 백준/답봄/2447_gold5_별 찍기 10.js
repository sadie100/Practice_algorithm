const fs = require("fs");
const input = Number(fs.readFileSync("test.txt").toString());

let str = "";

const printStar = (i, j) => {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
    str += "*";
  } else {
    printStar(Math.floor(i / 3), Math.floor(j / 3));
  }
};

for (let i = 0; i < input; i++) {
  //세로
  for (let j = 0; j < input; j++) {
    //가로
    printStar(i, j);
  }
  if (i !== input - 1) {
    str += "\n";
  }
}

console.log(str);
