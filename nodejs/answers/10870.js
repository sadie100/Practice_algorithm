const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

const pevo = (now) => {
  if (now < 0) {
    return 0;
  } else if (now === 1) return 1;
  return pevo(now - 1) + pevo(now - 2);
};

console.log(pevo(Number(input)));
