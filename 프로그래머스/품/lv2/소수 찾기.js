const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(numbers) {
  var answer = 0;
  const len = numbers.length;
  const visited = Array.from(new Array(len), () => false);
  const madeList = {};

  const dfs = (numstr, visited) => {
    if (numstr.length === len) {
      return;
    }

    if (!numstr) {
      for (let i = 0; i < len; i++) {
        if (numbers[i] === "0") continue;
        const newstr = numstr + numbers[i];
        if (madeList[newstr]) continue;
        const flag = isPrime(Number(newstr));
        if (flag) {
          madeList[newstr] = true;
          answer += 1;
        }
        visited[i] = true;
        dfs(newstr, visited);
        visited[i] = false;
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (visited[i]) continue;
        const newstr = numstr + numbers[i];
        if (madeList[newstr]) continue;
        const flag = isPrime(Number(newstr));
        if (flag) {
          madeList[newstr] = true;
          answer += 1;
        }
        visited[i] = true;
        dfs(newstr, visited);
        visited[i] = false;
      }
    }
  };
  dfs("", visited);

  return answer;
}
