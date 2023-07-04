function solution(n, s) {
    var answer = [];
    if(s<n){
        return [-1]
    }
    const part = Math.floor(s/n)
    const rest = s%n
    const normalCnt = n-rest
    answer = [...(new Array(normalCnt).fill(part)), ...(new Array(n-normalCnt).fill(part+1))]
    return answer;
}