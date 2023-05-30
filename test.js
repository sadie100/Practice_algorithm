//1021 회전하는 큐

const fs = require("fs");
const [first, second] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = first.split(" ").map(Number);
const goals = second.split(" ").map(Number);
const taskQueue = [[0, 0, ""]];
const queue = Array.from(new Array(N), (v, k) => k + 1).reverse();
let ans = Number.MAX_SAFE_INTEGER;

// const operate = (goalIdx, cnt, before) => {
//   const goal = goals[goalIdx];
//   console.log(queue);
//   if (queue.length > 0 && queue[queue.length - 1] === goal) {
//     if (goalIdx === M - 1) {
//       ans = Math.min(ans, cnt);
//       return;
//     }
//     queue.pop();
//     return taskQueue.push([goalIdx + 1, cnt, ""]);
//     // return operate(goalIdx + 1, cnt, "");
//   }
//   if (queue.length > 0 && before !== "front") {
//     const goingBack = queue.shift();
//     queue.push(goingBack);
//     taskQueue.push([goalIdx, cnt + 1, "back"]);
//     // operate(goalIdx, cnt + 1, "back");
//     queue.pop();
//     queue.unshift(goingBack);
//   }
//   if (queue.length > 0 && before !== "back") {
//     const goingFront = queue.pop();
//     queue.unshift(goingFront);
//     taskQueue.push([goalIdx, cnt + 1, "front"]);
//     // operate(goalIdx, cnt + 1, "front");
//     queue.shift();
//     queue.push(goingFront);
//   }
// };

while (true) {
  if (taskQueue.length === 0) {
    break;
  }
  console.log(taskQueue);
  const [goalIdx, cnt, before] = taskQueue.shift();
  const goal = goals[goalIdx];
  console.log(queue);
  if (queue.length > 0 && queue[queue.length - 1] === goal) {
    if (goalIdx === M - 1) {
      ans = Math.min(ans, cnt);
      break;
    }
    queue.pop();
    taskQueue.push([goalIdx + 1, cnt, ""]);
    break;
    // return operate(goalIdx + 1, cnt, "");
  }
  if (queue.length > 0 && before !== "front") {
    const goingBack = queue.shift();
    queue.push(goingBack);
    taskQueue.push([goalIdx, cnt + 1, "back"]);
    // operate(goalIdx, cnt + 1, "back");
    queue.pop();
    queue.unshift(goingBack);
  }
  if (queue.length > 0 && before !== "back") {
    const goingFront = queue.pop();
    queue.unshift(goingFront);
    taskQueue.push([goalIdx, cnt + 1, "front"]);
    // operate(goalIdx, cnt + 1, "front");
    queue.shift();
    queue.push(goingFront);
  }
}
// operate(0, 0, "");
console.log(ans);
