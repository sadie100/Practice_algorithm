'''
벽이 있는 곳에서부터 왼쪽으로 w까지, 위쪽으로 h까지는 직사각형의 가장 왼쪽 위칸이 올 수 없는 곳이므로,
visited를 True로 처리하고 시작한다
'''

import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[0]*(m+1) for _ in range(n+1)]
visited = [[False]*(m+1) for _ in range(n+1)]

for row in range(1,n+1):
    graph[row] = [0]+list(map(int, input().split()))

h, w, startRow, startCol, goalRow, goalCol = map(int, input().split())

dx = [0,1,0,-1]
dy = [1,0,-1,0]

for row in range(1, n+1):
    for col in range(1, m+1):
        if graph[row][col]:
            for r in range(row, row-h, -1):
                if r<1:
                    break
                for c in range(col, col-w, -1):
                    if c<1:
                        break
                    visited[r][c] = True


queue = deque([(startRow, startCol, 0)])
visited[startRow][startCol] = True
flag = False

while(queue):
    row, col, move = queue.popleft()

    if row==goalRow and col==goalCol:
        flag = True
        print(move)
        break

    for i in range(4):
        nr = row+dy[i]
        nc = col+dx[i]
        if nr<1 or nr>n or nc<1 or nc>m:
            continue
        if visited[nr][nc]:
            continue
        if nr+h-1<1 or nr+h-1>n or nc+w-1<1 or nc+w-1>m:
            continue
        visited[nr][nc] = True
        queue.append((nr, nc, move+1))

if not flag:
    print(-1)