'''
수가 많지 않으므로 그냥 전체 경우 구해서 최소, 최댓값 내놓기
'''

n = int(input())
sequence = [0] + list(map(int, input().split()))
maxVal = -1000000000
minVal = 1000000000
visited = [True] + [False] * (n)
operList = list(map(int, input().split()))

def dfs(idx, total):
    global maxVal, minVal
    print(visited)
    visited[idx] = True
    if len([i for i in visited if i==False])==0:
        # 모든 수열 처리 끝남
        print('결과값',total)
        maxVal = max(total, maxVal)
        minVal = min(total, minVal)
        visited[idx] = False
        return

    # 남은 연산자
    opers = [i for i in range(4) if operList[i]>0]
    print('남은연산자',opers)
    for nextIdx in range(1,n+1):
        if not visited[nextIdx]:
            visited[nextIdx] = True
            next = sequence[nextIdx]
            for oper in opers:
                operList[oper]-=1
                print('현재총합', total, '다음수', next,'연산기호', oper)
                if oper==0:
                    dfs(nextIdx, total+next)
                elif oper==1:
                    dfs(nextIdx, total-next)
                elif oper==2:
                    dfs(nextIdx, total*next)
                elif oper==3:
                    if total<0 and next>0:
                        dfs(nextIdx, -(-total//next))
                    else:
                        dfs(nextIdx, total//next)
                operList[oper]+=1
            visited[nextIdx] = False
    visited[idx] = False


for i in range(1,n+1):
    dfs(i, sequence[i])

print(maxVal)
print(minVal)