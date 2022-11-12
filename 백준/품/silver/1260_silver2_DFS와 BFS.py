from collections import deque

n,m,v = map(int, input().split())
graph = [[] for _ in range(n+1)]

d_visited = [False] * (n+1)
b_visited = [False] * (n+1)

d_visit = []
b_visit = []

for _ in range(m):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

for secGraph in graph:
    secGraph.sort()
    secGraph.sort()

def dfs(node):
    if d_visited[node]:
        return
    
    d_visited[node] = True
    d_visit.append(node)
    for next in graph[node]:
        if not d_visited[next]:
            dfs(next)

dfs(v)

bfs_queue = deque([v])
while bfs_queue:
    node = bfs_queue.popleft()
    if b_visited[node]:
        continue
    
    b_visited[node] = True
    b_visit.append(node)
    for next in graph[node]:
        if not b_visited[next]:
            bfs_queue.append(next)

print(" ".join(map(str, d_visit)))
print(" ".join(map(str,b_visit)))