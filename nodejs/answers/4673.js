const getNextSeq = (num) => {
  let arr = num.toString().split("");
  let result = 0;
  result += Number(num);
  for (let i of arr) {
    result += Number(i);
  }
  return result;
};

const seqArr = [];
const allNum = [];

for (let i = 1; i <= 10000; i++) {
  allNum.push(i);
  seqArr.push(getNextSeq(i));
}

for (let num of allNum) {
  if (!seqArr.includes(num)) {
    console.log(num);
  }
}
