const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

const num = Number(input);

const isHanSu = (number) => {
  const numArr = number.toString().split("");
  let firstDegree;
  let degree;
  let result = true;
  for (let i = 0; i < numArr.length - 1; i++) {
    if (i === 0) {
      firstDegree = numArr[i + 1] - numArr[i];
    } else {
      degree = numArr[i + 1] - numArr[i];
      if (firstDegree !== degree) {
        result = false;
      }
    }
  }
  return result;
};

const allArr = Array(num);
const getArr = [];
for (let i = 1; i <= allArr.length; i++) {
  getArr.push(isHanSu(i));
}

console.log(getArr.filter((res) => !!res).length);
