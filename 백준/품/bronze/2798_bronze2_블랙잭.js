const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const first = input[0].split(" ");
const num = Number(first[0]);
const goal = Number(first[1]);

const cards = input[1].split(" ").map((d) => Number(d));

const setCards = cards.slice();

const match = [];

for (let i = 0; i < num - 2; i++) {
  for (let j = i + 1; j < num - 1; j++) {
    for (let k = j + 1; k < num; k++) {
      if (cards[i] + cards[j] + cards[k] <= goal) {
        match.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
}

console.log(Math.max(...match));
