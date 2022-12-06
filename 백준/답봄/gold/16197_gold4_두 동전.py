'''
버튼 누르면 두 동전이 함께 움직임... 근데 하나만 떨어뜨려야 하는 문제
- idx 범위 밖이면 떨어뜨리고 return count+1
- idx 범위 밖으로 이동시킬 수 없으면 .(빈칸)이나 o으로 이동시키고 count+1
- 네 칸 모두 #이면 리턴
'''

from collections import deque
import sys

input = sys.stdin.readline

n,m = map(int, input().split())
board = [[] for _ in range(n)]
dx = [0,1,0,-1]
dy = [1,0,-1,0]
minCnt = -1
coins = []
# coins : [(row1, col1), (row2, col2), count]
coinNow = deque([])

for i in range(n):
    board[i] = list(input())
    for j in range(m):
        if board[i][j] == 'o':
            coins.append((i,j))

coins.append(0)

coinNow.append(coins)

while(coinNow):
    coin1, coin2, cnt = coinNow.popleft()
    for i in range(4):
        newCoin = []
        dropping = 0
        for row, col in [coin1, coin2]:
            nr = row + dx[i]
            nc = col + dy[i]
            if nr<0 or nr>=n or nc<0 or nc>=m:
                dropping += 1
                continue
            elif board[nr][nc]=="#":
                nr = row
                nc = col
            newCoin.append((nr, nc))
        
        if dropping==1:
            # 하나만 떨어짐
            if minCnt<0:
                minCnt = cnt+1
            else:
                minCnt = min(cnt+1, minCnt)
            continue
        elif dropping==2:
            #둘다 떨어짐
            continue
        else:
            if cnt+1==11:
                break
            newCoin.append(cnt+1)
            coinNow.append(newCoin)
    

print(minCnt)