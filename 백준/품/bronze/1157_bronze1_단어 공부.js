const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().toUpperCase();

const arr = input.split("");
let letterCount = {};

for (let i = 0; i < arr.length; i++) {
  if (!Object.keys(letterCount).includes(arr[i])) {
    letterCount = {
      ...letterCount,
      [arr[i]]: 1,
    };
  } else {
    const num = letterCount[arr[i]];
    letterCount = {
      ...letterCount,
      [arr[i]]: num + 1,
    };
  }
}

const values = Object.values(letterCount);
const max = Math.max(...values);
const index = values.indexOf(max);
if (values.lastIndexOf(max) !== values.indexOf(max)) {
  console.log("?");
} else {
  console.log(Object.keys(letterCount)[index]);
}
