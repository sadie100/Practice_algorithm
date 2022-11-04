const fs = require("fs");
const num = parseInt(fs.readFileSync("test.txt").toString());

console.log((num * (1 + num)) / 2);
