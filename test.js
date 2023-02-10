const n = 2;
const m = 3;

const building = JSON.parse(
  JSON.stringify(Array(n + 2).fill(Array(m + 2).fill(0)))
);
building[0][1] = 3;
console.log(building);
