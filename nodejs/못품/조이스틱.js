function solution(name) {
  var answer = 0;
  const startNum = "A".charCodeAt();
  const endNum = "Z".charCodeAt();

  //조이스틱 위아래 count 세는 함수
  const countFromA = (char) => {
    const ascii = char.charCodeAt();
    let upon = ascii - startNum;
    let down = endNum - ascii + 1;
    return upon > down ? down : upon;
  };

  //들어온 text에서 연속되는 A의 수 세기
  const countSequence = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== "A") break;
      count++;
    }
    return count;
  };

  const charArr = name.split("");

  //charArr 돌리면서 count 세기
  const stepArr = [charArr.length];
  charArr.map((char, idx) => {
    //위아래 커서 세기
    const count = countFromA(char);
    answer += count;

    //왼쪽오른쪽 커서 세기
    if (char === "A" && charArr[idx - 1] !== "A") {
      //만약 A일 경우, 연속된 A의 개수를 구하기
      const acount = countSequence(charArr.slice(idx));
      const next = idx + acount;
      //커서를 왼쪽으로 이동하는 경우 생각하기(일반적인 step과 왼쪽 이동 비교)
      //커서를 왼쪽으로 이동할 때 : idx+idx+charArr.length-(idx+acount)
      stepArr.push(idx * 2 + charArr.length - next - 1);
    }
  });

  return answer + Math.min(...stepArr) - 1;
}

// function solution(name) {
//   var answer = 0;
//   let reverseAnswer = 0;
//   const startNum = "A".charCodeAt();
//   const endNum = "Z".charCodeAt();

//   const countFromA = (char) => {
//     const ascii = char.charCodeAt();
//     let upon = ascii - startNum;
//     let down = endNum - ascii + 1;
//     return upon > down ? down : upon;
//   };

//   const charArr = name.split("");
//   let step = 0;
//   charArr.map((char, idx) => {
//     if (idx > 0) step += 1;
//     const count = countFromA(char);
//     answer += count;
//     if (count !== 0) {
//       answer += step;
//       step = 0;
//     }
//   });

//   step = 0;
//   const cut = charArr.shift();
//   const reverseArr = [...charArr, cut];
//   for (let i = reverseArr.length - 1; i >= 0; i--) {
//     if (i < reverseArr.length - 1) step += 1;
//     const count = countFromA(reverseArr[i]);
//     reverseAnswer += count;
//     if (count !== 0) {
//       reverseAnswer += step;
//       step = 0;
//     }
//   }

//   return answer > reverseAnswer ? reverseAnswer : answer;
// }
