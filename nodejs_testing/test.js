const fs = require("fs");
const [k, ...lectures] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const lecList = lectures
  .map((d) => {
    return ([num, start, end] = d.split(" ").map(Number));
  })
  .sort((a, b) => a[1] - b[1]);

const lectureNow = [];
lectureRoom = [];

lecList.map(([num, start, end]) => {
  let flag = false;
  if (lectureNow.length > 0) {
    lectureNow.map((time, room) => {
      if (!flag && start >= time) {
        lectureNow[room] = end;
        lectureRoom.push(room + 1);
        flag = true;
      }
    });
  }
  if (!flag) {
    lectureNow.push(end);
    lectureRoom.push(lectureNow.length);
  }
});

console.log(lectureNow.length);
lectureRoom.map((room) => {
  console.log(room);
});
