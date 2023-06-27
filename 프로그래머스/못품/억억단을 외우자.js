function solution(e, starts) {
  var answer = [];
  const newStarts = starts.map((st, id) => [st, id]);
  newStarts.sort((a, b) => a[0] - b[0]);
  const sqrt = Math.ceil(Math.sqrt(e));
  const table = {};
  for (let i = 1; i <= e; i++) {
    for (let j = 1; j <= i; j++) {
      if (i * j > e) break;
      let increase = 1;
      if (i !== j) increase = 2;
      if (table[j * i]) {
        table[j * i] += increase;
      } else {
        table[j * i] = increase;
      }
    }
  }

  const sortedTable = Object.entries(table).map(([key, val]) => {
    return [val, Number(key)];
  });

  sortedTable.sort((a, b) => {
    return b[0] !== a[0] ? b[0] - a[0] : a[1] - b[1];
  });

  starts.map((start) => {
    for (let [count, num] of sortedTable) {
      if (start <= num) {
        answer.push(num);
        break;
      }
    }
  });
  return answer;
}

/**
 * 
function solution(e, starts) {
  var answer = starts.map(()=>0);
  const newStarts = starts.map((st, id) => [st,id])
  newStarts.sort((a,b) => a[0]-b[0])
  const sqrt = Math.ceil(Math.sqrt(e))
  const table = {}
  for(let i=1;i<=e;i++) {
    for(let j=1;j<=i;j++){
      if(i*j>e) break
          let increase = 1
          if(i!==j) increase = 2
          if(table[j*i]){
            table[j*i] += increase
          }else{
            table[j*i] = increase
          }
        }
  }
  
  const sortedTable = Object.entries(table).map(([key, val]) => {
    return [val, Number(key)]        
  })
  
  sortedTable.sort((a,b) => {
    return b[0]!==a[0] ? b[0]-a[0] : a[1]-b[1]
  })
  let i=0;
  console.log(sortedTable)
  for(let [count, num] of sortedTable){
    if(i>=starts.length) break
    while(i<starts.length && newStarts[i][0]<=num){
      let idx = newStarts[i][1]
      answer[idx] = num
      i+=1
      }
  }
  return answer;
}
      */
