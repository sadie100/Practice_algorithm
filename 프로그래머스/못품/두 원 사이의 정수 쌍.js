const getMaxHeight = (width, limit) => {
  const height = Math.ceil(Math.sqrt(width ** 2 * 2));
  return height > limit ? limit : height;
};

function solution(r1, r2) {
  var answer = 0;
  const start = r1;
  let minVal = r1 ** 2;
  let maxVal = r2 ** 2;
  for (let width = 1; width < r2; width++) {
    if (width < r1) {
      answer += getMaxHeight(width) - r1;
    } else {
      answer += getMaxHeight(width);
    }
  }
  return answer * 4 + 8;
}
