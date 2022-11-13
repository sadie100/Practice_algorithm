'''
dfs 돌려서 구하기
'''

import sys
sys.setrecursionlimit(10**7)
input = sys.stdin.readline

n,m= map(int,input().split())
graph = [[] for _ in range(n+1)]
visited = [False]*(n+1)
count=0

for _ in range(m):
    u,v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

def dfs(node):
    visited[node] = True
    
    for next in graph[node]:
        if not visited[next]:
            dfs(next)
    
for node in range(1,n+1):
    if not visited[node]:
        count +=1
        dfs(node)

print(count)