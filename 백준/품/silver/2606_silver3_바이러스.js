const fs = require('fs');
const [comNum, connection, ...list] = fs.readFileSync('test.txt').toString().trim().split("\n");

const graph = Array.from(Array(+comNum+1),()=>new Array());
const visited = new Array(+comNum+1).fill(false);
let result = 0;
list.map(connect => {
    const [first, second] = connect.split(" ").map(Number);
    graph[first].push(second);
    graph[second].push(first);
});


const dfs = (idx) => {
    result++;
    visited[idx]=true;

    graph[idx].map(d=>{
        if(!visited[d]){
            dfs(d);
        }
    })
}

visited[1] = true;
graph[1].map(d=>{
    if(!visited[d]){
        dfs(d);
    }
})

console.log(result)