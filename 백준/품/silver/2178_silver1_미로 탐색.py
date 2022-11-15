from collections import deque

import sys
input = sys.stdin.readline

n,m = map(int, input().split())
graph = [[] for _ in range(n)]
visited = [[False]*(m) for _ in range(n)]
minVal = 10000

dx = [-1,0,1,0]
dy = [0,1,0,-1]

for i in range(n):
    miro = list(map(int,list(input().strip())))
    graph[i] = miro

todo = deque([[0,0,1]])

while(todo):
    r,c,count = todo.popleft()
    if visited[r][c] : continue

    if r==n-1 and c==m-1:
        minVal = min(minVal, count)
        continue

    visited[r][c] = True
    for i in range(4):
        newRow = r+dx[i]
        newCol = c+dy[i]
        if 0<=newRow<n and 0<=newCol<m and not visited[newRow][newCol]:
            if graph[newRow][newCol]:
                todo.append([newRow, newCol, count+1])

print(minVal)