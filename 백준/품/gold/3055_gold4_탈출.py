'''
시뮬레이션
'''

from collections import deque
import sys
input = sys.stdin.readline

row, col = map(int, input().split())
graph = [[] for i in range(row)]
time = -1
dx = [0,1,0,-1]
dy = [1,0,-1,0]
water = deque([])
hedgehog = deque([])
visited = [[False]*col for _ in range(row)]

for i in range(row):
    graph[i] = list(input().strip())
    for j in range(col):
        if graph[i][j] == '*':
            water.append((i,j))
        elif graph[i][j] == 'S':
            hedgehog.append((i,j,0))
        elif graph[i][j] == 'D':
            goal = (i,j)

while(True):
    nextDay = deque([])
    # 물 먼저 채우고, 고슴도치 이동시킨다
    while(water):
        nowR, nowC = water.popleft()
        for i in range(4):
            nextR = nowR + dx[i]
            nextC = nowC + dy[i]
            if 0<=nextR<row and 0<=nextC<col and graph[nextR][nextC] == '.':
                graph[nextR][nextC] = '*'
                nextDay.append((nextR, nextC))
    
    water = nextDay
    # 물 다 채움. 고슴도치 이동
    nextHedge = deque([])
    while(hedgehog):
        nowR, nowC, nowCost = hedgehog.popleft()
        visited[nowR][nowC] = True
        for i in range(4):
            nextR = nowR + dx[i]
            nextC = nowC + dy[i]
            if 0<=nextR<row and 0<=nextC<col:
                if graph[nextR][nextC] == '.' and not visited[nextR][nextC]:
                    nextHedge.append((nextR, nextC, nowCost + 1))
                    visited[nextR][nextC] = True
                elif graph[nextR][nextC] == 'D':
                    time = nowCost+1 if time<0 else min(time, nowCost + 1)

    if not nextHedge:
        break

    hedgehog = nextHedge

if time<0:
    print('KAKTUS')
else:
    print(time)
    

