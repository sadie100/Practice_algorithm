function solution(targets) {
  var answer = 0;
  let now = 0;

  sortedTarget = targets.sort((a,b) => {
      return a[1]-b[1]
  })
  
  for([start, end] of sortedTarget) {
      if(now<=start){
          answer += 1;
          now = end;
      }else if(end<now){
          now = end;
      }
  }
  
  return answer;
}