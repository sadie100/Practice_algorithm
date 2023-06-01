//1021 회전하는 큐

const fs = require("fs");
const [first, second] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = first.split(" ").map(Number);
const goals = second.split(" ").map(Number);
const defaultQueue = Array.from(new Array(N), (v, k) => k + 1).reverse();
let taskQueue = [[0, 0, "", [...defaultQueue]]];
let ans = Number.MAX_SAFE_INTEGER;

while (true) {
  if (taskQueue.length === 0) {
    break;
  }
  const [goalIdx, cnt, before, queue] = taskQueue.shift();
  const goal = goals[goalIdx];
  if (queue.length > 0 && queue[queue.length - 1] === goal) {
    taskQueue = [];
    if (goalIdx === M - 1) {
      ans = Math.min(ans, cnt);
      console.log(ans);
      return;
    }
    queue.pop();
    taskQueue.push([goalIdx + 1, cnt, "", [...queue]]);
    continue;
  }
  if (queue.length > 0 && before !== "front") {
    const goingBack = queue.shift();
    queue.push(goingBack);
    taskQueue.push([goalIdx, cnt + 1, "back", [...queue]]);
    queue.pop();
    queue.unshift(goingBack);
  }
  if (queue.length > 0 && before !== "back") {
    const goingFront = queue.pop();
    queue.unshift(goingFront);
    taskQueue.push([goalIdx, cnt + 1, "front", [...queue]]);
    queue.shift();
    queue.push(goingFront);
  }
}
