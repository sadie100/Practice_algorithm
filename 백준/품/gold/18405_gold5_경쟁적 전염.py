'''
시뮬레이션
'''

import sys
from collections import deque

input = sys.stdin.readline

n,k = map(int, input().split())
graph = [[]*(n+1) for _ in range(n+1)]
togo = []
for idx in range(1,n+1):
    graph[idx] = list(map(int, input().split()))
    graph[idx].insert(0, 0)
    for j in range(1,n+1):
        if graph[idx][j]:
            # 바이러스 있는 곳 등록
            togo.append((graph[idx][j], idx,j))

goalSec, x, y = map(int, input().split())
nowSec = 0
dx = [1,0,-1,0]
dy = [0,1,0,-1]

togo.sort()
togo = deque(togo)

while(True):
    if nowSec == goalSec:
        print(graph[x][y])
        break

    nowSec += 1
    nextTogo = deque([])

    while(togo):
        type, row, col = togo.popleft()
        for i in range(4):
            nextR = row + dx[i]
            nextC = col + dy[i]
            if 1<=nextR<=n and 1<=nextC<=n and not graph[nextR][nextC]:
                graph[nextR][nextC] = type
                nextTogo.append((type, nextR, nextC))
    
    togo = nextTogo