from collections import deque

def solution(n, info):
    answer = []
    maxScore = 0
    answer = [-1]
    #(now, total, left, arrow)
    queue = deque([(0,0,n,[])])
    
    while(queue):
        now, total, left, arrow = queue.popleft()
        if now==11 or left==0:
            if maxScore<=total:
                maxScore = total
                if now<11:
                    arrow += [0]*(11-now)
                answer = arrow
            continue

        appeach = info[now]
        queue.append((now+1, total, left, arrow + [0]))
        if left>appeach:
            queue.append((now+1, total+10-now, left-appeach-1, arrow + [appeach+1]))
        
    return answer