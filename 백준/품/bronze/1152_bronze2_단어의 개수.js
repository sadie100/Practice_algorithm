const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

const arr = input.split(" ");
console.log(arr.filter((a) => a !== "").length);
