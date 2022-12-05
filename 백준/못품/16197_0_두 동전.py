'''
버튼 누르면 두 동전이 함께 움직임... 근데 하나만 떨어뜨려야 하는 문제
- idx 범위 밖이면 떨어뜨리고 return count+1
- idx 범위 밖으로 이동시킬 수 없으면 .(빈칸)이나 o으로 이동시키고 count+1
- 네 칸 모두 #이면 리턴
'''

n,m = map(int, input().split())
board = [[] for _ in range(n)]
dx = [0,1,0,-1]
dy = [1,0,-1,0]
coins = []
minCnt = -1

for i in range(n):
    board[i] = list(input())
    for j in range(m):
        if board[i][j] == 'o':
            coins.append((i,j))
            board[i][j] = 1
        elif board[i][j] == '.':
            board[i][j] = 0
        elif board[i][j] == '#':
            board[i][j] = -1

def dfs(coinNow, cnt):
    global minCnt
    if cnt==10:
        return
    
    for i in range(4):
        newCoin = []
        dropping = 0
        for row, col in coinNow:
            board[row][col]-=1
            nr = row + dx[i]
            nc = col + dy[i]
            if nr<0 or nr>=n or nc<0 or nc>=m:
                dropping += 1
            elif board[nr][nc]<0:
                nr = row
                nc = col
                newCoin.append((nr, nc))
                board[nr][nc]+=1
        
        if dropping==1:
            # 하나만 떨어짐
            if minCnt<0:
                minCnt = cnt+1
            else:
                minCnt = min(cnt+1, minCnt)
            return
        elif dropping==2:
            #둘다 떨어짐
            return
        else:
            dfs(newCoin, cnt+1)

dfs(coins, 0)

print(minCnt)