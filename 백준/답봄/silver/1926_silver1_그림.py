from collections import deque
import sys

input = sys.stdin.readline

gr, gc = map(int, input().split())
graph = [[] for _ in range(gr)]
dr = [0,1,-1,0]
dc = [1,0,0,-1]
cnt = 0
maximum = 0

for i in range(gr):
    graph[i] = list(map(int, input().split()))

def bfs(r, c):
    global cnt, maximum
    graph[r][c] = 0
    queue = deque([(r,c)])
    cnt += 1
    width = 0
    while(queue):
        width+=1
        row, col = queue.popleft()
        for i in range(4):
            nr = row + dr[i]
            nc = col + dc[i]
            if 0<=nr<gr and 0<=nc<gc and graph[nr][nc]:
                if not graph[nr][nc]:continue
                graph[nr][nc] = 0
                queue.append((nr, nc))
    maximum = max(maximum, width)

for r in range(gr):
    for c in range(gc):
        if graph[r][c]:
            bfs(r,c)

print(cnt)
print(maximum)