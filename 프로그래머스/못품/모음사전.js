function solution(word) {
  var answer = 0;
  let nword = "";

  const dictionary = ["A", "E", "I", "O", "U"];

  const dfs = (nword) => {
    if (nword.length === 5) {
      nword = nword.slice(0, -1);
      dfs(nword.slice(0, -1));
      return;
    }

    const lastword = nword[nword.length - 1];
    const next = dictionary.indexOf(lastword) + 1;
    if (next > 4) {
      dfs(nword.concat("A"));
    }
  };

  return answer;
}
