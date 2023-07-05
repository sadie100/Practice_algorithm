function solution(n, works) {
  var answer = 0;

  works.sort((a, b) => b - a);
  if (works.length === 1) {
    return n >= works[0] ? 0 : (works[0] - n) ** 2;
  }

  let idx = 0;
  while (true) {
    if (n === 0) break;
    if (works[idx] === 0) break;
    let dif = works[idx] - works[idx + 1];
    if (dif > 0) {
      if (dif >= n) {
        works[idx] -= n;
        n = 0;
        break;
      }
      works[idx] -= dif;
      n -= dif;
    } else {
      works[idx] -= 1;
      n -= 1;
    }
    idx += 1;
    if (idx === works.length) {
      idx = 0;
    }
  }
  return works.reduce((acc, cur) => {
    return (acc += cur ** 2);
  }, 0);
}

/*
function solution(n, works) {
    var answer = 0;
    
    works.sort((a,b)=>b-a)
    if(works.length===1){
        return n>=works[0] ? 0 : (works[0]-n)**2
    }
    
    let idx = 0
    while(true){
        if(n===0)break
        if(works[idx]===0)break
        let sameCnt = 0
        let dif=0
        while(true){
            dif = works[idx] - works[idx+1]
            if(dif>0){
                break
            }
            sameCnt += 1
            idx += 1
            if(idx === works.length){
                break
            }
        }
        if(sameCnt>0){
            for(let i=idx-sameCnt;i<idx;i++){
                works[i] -= 1
                n -= 1
                if(n===0) break
            }
        }else{
            if(dif>=n){
                works[idx] -= n
                n = 0
            }else{
                works[idx] -= dif
                n -= dif
            }
            idx += 1
        }
        if(n===0) break
        if(idx === works.length){
            idx = 0
        }
        
    }
    return works.reduce((acc, cur) => {
        return acc += cur**2
    },0);
}
*/
