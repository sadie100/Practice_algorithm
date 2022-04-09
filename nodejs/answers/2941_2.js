const fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim();

const chroa = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];

chroa.forEach((char) => {
  input = input.replaceAll(char, 1);
});

console.log(input.length);
