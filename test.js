//1021 회전하는 큐

const fs = require("fs");
const [first, second] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = first.split(" ").map(Number);
const goals = second.split(" ").map(Number);
const queue = Array.from(new Array(N), (v, k) => k + 1);
const defaultVisited = queue.reduce((acc, cur) => {
  acc[cur] = false;
  return acc;
}, {});

const taskQueue = [[0, 0, "", defaultVisited, 0]];
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

const moveCursor = (cursor, plus, visited) => {
  let nextCursor = plus ? cursor + 1 : cursor - 1;
  if (plus === true) {
    while (true) {
      if (visited[nextCursor]) {
        nextCursor += 1;
        continue;
      }
      if (nextCursor === N) {
        nextCursor = 0;
        continue;
      }
      break;
    }
  } else {
    while (true) {
      if (visited[nextCursor]) {
        nextCursor -= 1;
        continue;
      }
      if (nextCursor === -1) {
        nextCursor = N - 1;
        continue;
      }
      break;
    }
  }
  return nextCursor;
};

while (true) {
  // console.log(taskQueue);
  if (taskQueue.length === 0) {
    break;
  }
  const [goalIdx, cnt, before, visited, cursor] = taskQueue.shift();
  // console.log(goalIdx, cnt, before, cursor);
  const goal = goals[goalIdx];
  if (queue[cursor] === goal) {
    visited[queue[cursor]] = true;
    if (goalIdx === M - 1) {
      ans = Math.min(ans, cnt);
      console.log(ans);
      return;
    }
    taskQueue.push([
      goalIdx + 1,
      cnt,
      "",
      { ...visited },
      moveCursor(cursor, true, visited),
    ]);
    continue;
  }
  // if (visited[queue[cursor]]) {
  //   taskQueue.push([goalIdx, cnt, "", visited, moveCursor(cursor, true)]);
  //   continue;
  // }
  if (before !== "front") {
    taskQueue.push([
      goalIdx,
      cnt + 1,
      "back",
      { ...visited },
      moveCursor(cursor, true, visited),
    ]);
  }
  if (before !== "back") {
    taskQueue.push([
      goalIdx,
      cnt + 1,
      "back",
      { ...visited },
      moveCursor(cursor, false, visited),
    ]);
  }
}
// operate(0, 0, "");
// console.log(ans);
