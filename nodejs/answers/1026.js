const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split("\n");

input.shift();

const b = input[1].split(" ").map((d)=>(Number(d)));
const a = input[0].split(" ").map((d)=>( Number(d)));

const b_sort = b.sort((a,b)=>a-b);
const a_sort = a.sort((a,b)=>b-a);

let result=0;
for(let i=0;i<b_sort.length;i++){
    result+=b_sort[i]*a_sort[i]
}

console.log(result)