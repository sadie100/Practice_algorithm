/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const sortWord = (word) => {
  const wordArr = word.split("");
  return wordArr.sort().join("");
};

var groupAnagrams = function (strs) {
  const answer = {};

  for (let str of strs) {
    const origin = sortWord(str);
    if (!answer[origin]) {
      answer[origin] = [str];
    } else {
      answer[origin].push(str);
    }
  }

  return Object.values(answer);
};
