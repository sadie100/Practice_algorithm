function solution(s) {
  const mathArr = s.split(" ").map(Number);
  return `${Math.min(...mathArr)} ${Math.max(...mathArr)}`;
}
