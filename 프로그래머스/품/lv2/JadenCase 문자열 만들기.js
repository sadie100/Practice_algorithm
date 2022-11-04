/*
s space 단위로 split
    또 문자 단위로 split
        첫번째 원소 아니면 answer에 space 추가    
        배열 돌리면서 첫번째 원소면 대문자 answer에 찍기
        아니면 소문자 answer에 찍기
answer 리턴
*/

function solution(s) {
  let answer = "";
  const word = s.split(" ");
  word.map((wo, index) => {
    if (index !== 0) answer += " ";
    wo.split("").map((w, idx) => {
      if (idx === 0) {
        answer += w.toUpperCase();
      } else {
        answer += w.toLowerCase();
      }
    });
  });
  return answer;
}
