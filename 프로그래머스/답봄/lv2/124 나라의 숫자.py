
def solution(n):
    answer = ''
    restList = [4,1,2]
    now = n

    while(True):
        if(now==0): break
        
        rest = now % 3
        if rest==0:
            answer+='4'
            now = now//3 -1
        else:
            answer += str(restList[rest])
            now = now // 3
        
    
    return answer[::-1]