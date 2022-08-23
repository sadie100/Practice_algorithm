//두 큐의 합 더하기 진행중

const queue1 = [3, 2, 7, 2],queue2 = [4, 6, 5, 1]

    var answer = -2;
    const total = queue1.reduce((cur,acc)=>{return acc+cur},0)+queue2.reduce((cur,acc)=>{return acc+cur},0);
    const purpose = total/2;
    
    let count=0;
    
    const que1 = [...queue1];
    const que2 = [...queue2];
     
    let idx1 = 0, idx2=que1.length;
    
    while(true){
       const all = [...que1, ...que2];
       console.log(idx1);
       console.log(idx2);
        // let total1 = que1.reduce((cur,acc)=>{return acc+cur},0);
        // let total2 = que2.reduce((cur,acc)=>{return acc+cur},0);
        let total1 = all.reduce((cur,acc,idx)=>{
            if(idx>=idx1 || idx<idx2){return acc+cur
            }else{ return acc;}
        },0);
        let total2 = all.reduce((cur,acc,idx)=>{
            if(idx<idx1 || idx>=idx2){return acc+cur;
        }else {return acc;}},0);
        console.log(total1)
        console.log(total2)
        if(total1=== total2){
            return count;
        }
        if(total2>total1){
            idx2++;
            count++;
        }else{
            idx1++;
            count++;
        }
        if(idx1===0 && idx2===que1.length){
            return -1;
        }
    }
    
    
    
    return count;
