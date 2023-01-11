const fs = require('fs');
const [info, ...rest] = fs.readFileSync("input.txt").toString().trim().split("\n");

const [gr, gc] = info.split(" ").map(d=>+d);
const graph = rest.map(d=>d.split(" ").map(e=>+e));
const visited = Array.from(new Array(gr), ()=>Array(gc).fill(false));
let maximum = 0;
let count = 0;

const dr = [1,0,-1,0];
const dc = [0,1,0,-1];

const dfs = (row, col, cnt) => {
    maximum = cnt>maximum ? cnt : maximum;
    if(visited[row][col]){
        return;
    }
    if (graph[row][col] == 0){
        return;
    }
   
    visited[row][col] = true;
    for(let i=0;i<4;i++){
        const nr = row+dr[i];
        const nc = col+dc[i];
        if(nr<0 || nr>=gr || nc<0 || nc>=gc || visited[nr][nc] || !graph[nr][nc]){
            continue;
        }
        dfs(nr, nc, cnt+1);
    }
}

for(let i=0;i<gr;i++){
    for(let j=0;j<gc;j++){
        if(!visited[i][j] && graph[i][j]){
            dfs(i,j,1);
            count+=1;
        }
    }
}

console.log(count);
console.log(maximum);