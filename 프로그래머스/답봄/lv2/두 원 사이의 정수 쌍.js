const getSmallerHeight = (width, target, type) => {
  const height = Math.sqrt(target ** 2 - width ** 2);
  if (Number.isInteger(height) && type === "r1") {
    return height - 1;
  } else {
    return Math.floor(height);
  }
};

function solution(r1, r2) {
  var answer = 0;
  for (let width = 1; width < r2; width++) {
    if (width < r1) {
      const plus =
        getSmallerHeight(width, r2, "r2") - getSmallerHeight(width, r1, "r1");
      answer += plus;
    } else {
      const plus = getSmallerHeight(width, r2, "r2");
      answer += plus;
    }
  }
  return answer * 4 + (r2 - r1 + 1) * 4;
}
