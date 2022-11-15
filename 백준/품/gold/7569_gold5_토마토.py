'''
일자를 시뮬레이션하면서 토마토가 다 익는 일수에 스탑한다
'''

import sys
from collections import deque

input = sys.stdin.readline

col, row, height = map(int, input().split())
graph = [[[] for i in range(row)] for _ in range(height)]
day = 0
visited = [[[False]*col for i in range(row)] for _ in range(height)]

every = col*row*height
unRotCnt = 0
rotten = deque([])

for h in range(height):
    for r in range(row):
        graph[h][r] = list(map(int, input().split()))
        unRotCnt += graph[h][r].count(0)
        for i in range(col):
            if graph[h][r][i] == 1:
                rotten.append((h,r,i))
                visited[h][r][i] = True

dx = [1,0,-1,0]
dy = [0,1,0,-1]
dh = [-1,1]

while(True):
    if unRotCnt == 0 or not rotten:
        # 모두 익거나 다 못 익힘..
        if unRotCnt>0:
            day = -1
        break
    day += 1
    nextDay = deque([])
    # 주변 토마토 익히기..
    while rotten:
        h,r,c = rotten.popleft()
        for i in range(4):
            newRow = r + dx[i]
            newCol = c + dy[i]
            if 0<=newRow<row and 0<=newCol<col and not graph[h][newRow][newCol] and not visited[h][newRow][newCol]:
                graph[h][newRow][newCol] = 1
                unRotCnt -= 1
                nextDay.append((h, newRow, newCol))
                visited[h][newRow][newCol] = True
        for i in range(2):
            newHeight = h + dh[i]
            if 0<=newHeight<height and not graph[newHeight][r][c] and not visited[newHeight][r][c]:
                graph[newHeight][r][c] = 1
                unRotCnt -= 1
                nextDay.append((newHeight, r, c))
                visited[newHeight][r][c] = True
    rotten = nextDay        

    

print(day)