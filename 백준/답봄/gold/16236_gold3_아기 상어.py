'''
bfs는 가장 가까운 물고기를 찾기 위한 수단
bfs를 만들어 놓고, 계속 반복해서 돌려야 한다.
'''

import sys
from collections import deque
import heapq
input = sys.stdin.readline

n = int(input())

board = [[]*n for _ in range(n)]
dsize = 2
eat = 0
second = 0

dr = [-1,0,1,0]
dc = [0,-1,0,1]

now = (-1,-1)
for i in range(n):
    board[i] = list(map(int, input().split()))
    for j in range(n):
        if not board[i][j]: continue
        if board[i][j]==9:
            now = (i,j)
            board[i][j] = 0
        

def bfs(row,col,size):
    # 가장 가까운 물꼬기를 찾기 위한 bfs
    visited = [[False]*n for _ in range(n)]
    togo = deque([(row,col,0)])
    fishes = []
    while(togo):
        nowr, nowc, dist = togo.popleft()
        for i in range(4):
            nr = nowr + dr[i]
            nc = nowc + dc[i]
            if 0<=nr<n and 0<=nc<n:
                if visited[nr][nc]: continue
                if board[nr][nc]<=size:
                    # 빈칸 방문
                    visited[nr][nc] = True
                    togo.append((nr,nc,dist+1))
                    if 0<board[nr][nc]<size:
                        # 먹을 수 있음
                        heapq.heappush(fishes, (dist+1, nr, nc))
    
    return fishes
          
while(True):
    nowr, nowc = now
    fishes = bfs(nowr, nowc, dsize)
    if not fishes:
        break
    # 물고기 먹음
    (dist, fr, fc) = heapq.heappop(fishes)
    second += dist
    board[fr][fc], board[nowr][nowc] = 0,0
    now = (fr, fc)
    eat+=1
    if eat==dsize:
        eat = 0
        dsize+=1

print(second)