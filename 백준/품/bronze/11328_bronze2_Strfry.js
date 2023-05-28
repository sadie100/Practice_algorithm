//11328 Strfry
const fs = require("fs");
const [n, ...cases] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const isStrfry = (base, result) => {
  const alpha1 = [...base].sort();
  const alpha2 = [...result].sort();
  if (alpha1.toString() === alpha2.toString()) {
    return true;
  }
  return false;
};

for (const test of cases) {
  const [base, result] = test.split(" ").map((d) => d.trim());
  if (isStrfry(base, result)) {
    console.log("Possible");
  } else {
    console.log("Impossible");
  }
}
