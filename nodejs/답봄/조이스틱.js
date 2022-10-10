/*
위아래 count와 양옆 count를 따로 구해서 더한다
위아래 count : name을 배열로 만든 뒤 하나씩 이동해 가면서 합산
양옆 count : 기본적으로 name.length-1, 위아래 count를 할 때마다 다른 경우를 생각한 뒤 최소값 리턴
다른 경우 : 1. 해당 문자까지 앞에서 가다가 뒤로 가서 합산한 경우
2. 해당 문자까지 뒤에서 가다가 앞으로 가서 합산한 경우
*/
function solution(name) {
  const startNum = "A".charCodeAt();
  const endNum = "Z".charCodeAt();

  //조이스틱 위아래 count 세는 함수
  const countFromA = (char) => {
    const ascii = char.charCodeAt();
    let upon = ascii - startNum;
    let down = endNum - ascii + 1;
    return upon > down ? down : upon;
  };

  const charArr = name.split("");
  let upDown = 0;
  let leftRight = charArr.length - 1;

  for (let i = 0; i < charArr.length; i++) {
    upDown += countFromA(charArr[i]);
    let next = i + 1;
    while (charArr[next] === "A" && next < charArr.length) {
      next += 1;
    }
    let reverse = i * 2 + charArr.length - next;
    let reverse2 = i + (charArr.length - next) * 2;

    leftRight = Math.min(leftRight, reverse, reverse2);
  }
  return upDown + leftRight;
}
