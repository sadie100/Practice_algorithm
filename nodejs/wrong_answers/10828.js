const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const stack = [];

const push = (x) => {
  stack.push(x);
};

const pop = () => {
  if (stack.length !== 0) {
    const top = stack.pop();
    console.log(top);
  } else {
    console.log(-1);
  }
};

const size = () => {
  console.log(stack.length);
};

const empty = () => {
  if (stack.length === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
};

const top = () => {
  if (stack.length !== 0) {
    const top = stack[stack.length - 1];
    console.log(top);
  } else {
    console.log(-1);
  }
};

input.forEach((line) => {
  if (line.includes("push")) {
    const lineArray = line.split(" ");
    push(lineArray[1]);
  } else if (line.includes("top")) {
    top();
  } else if (line.includes("size")) {
    size();
  } else if (line.includes("empty")) {
    empty();
  } else if (line.includes("pop")) {
    pop();
  }
});
