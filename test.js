//6549 히스토그램에서 가장 큰 직사각형

const fs = require("fs");
const cases = fs.readFileSync("input.txt").toString().trim().split("\n");

cases.map((test) => {
  if (test.trim() === "0") {
    return;
  }
  const [n, ...heights] = test.split(" ").map(Number);
  let val = 0;
  let hNow = 0;
  let width = 0;
  for (let height of heights) {
    hNow = hNow !== 0 ? Math.min(hNow, height) : height;
    if (height < hNow) {
      //새로 들어온 높이가 줄어듦
      val = Math.max(hNow * width, val);
      hNow = height;
      width += 1;
    } else {
      width += 1;
    }
  }
  console.log(val);
});
