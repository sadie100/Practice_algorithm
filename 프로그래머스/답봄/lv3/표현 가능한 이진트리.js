/*
자식 요소가 1인데 부모가 0이라면 이진트리가 아니다.
해당 경우가 아니라면 이진트리를 만족한다.
*/

const checkTree = (start, end, numStr) => {
  if (start >= end) return 1;
  const mid = Math.floor((start + end) / 2);

  const left = Math.floor((start + mid - 1) / 2);
  const right = Math.floor((mid + end + 1) / 2);

  if (numStr[mid] === "0") {
    if (numStr[left] === "1" || numStr[right] === "1") {
      return 0;
    }
  }

  const res1 = checkTree(start, mid - 1, numStr);
  const res2 = checkTree(mid + 1, end, numStr);

  if (res1 && res2) {
    return 1;
  } else {
    return 0;
  }
};

function solution(numbers) {
  const answer = numbers.map((num) => {
    let converted = num.toString(2);
    let twoCheck = 1;
    while (true) {
      if (twoCheck === converted.length) {
        break;
      }
      if (twoCheck > converted.length) {
        zeros = "0".repeat(twoCheck - converted.length);

        converted = zeros + converted;
        break;
      }
      twoCheck = twoCheck * 2 + 1;
    }
    return checkTree(0, converted.length - 1, converted);
  });

  return answer;
}
