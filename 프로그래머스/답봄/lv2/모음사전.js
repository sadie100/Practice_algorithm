function solution(word) {
  const dictionary = [];
  const alpha = ["A", "E", "I", "O", "U"];
  const dfs = (str) => {
    dictionary.push(str);
    if (str.length === 5) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      dfs(str + alpha[i]);
    }
  };

  for (let i = 0; i < 5; i++) {
    dfs(alpha[i]);
  }

  dictionary.sort();
  return dictionary.indexOf(word) + 1;
}
