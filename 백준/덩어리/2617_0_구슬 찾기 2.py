'''
두 개의 graph로 무겁고 작은 관계를 지정한다
중첩된 무거움 관계가 있을 때마다 dfs로 모두 넣어 준다

길이가 (n//2)보다 큰(초과) 구슬 수를 구한다
'''

import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

n,m = map(int, input().split())
heavyGraph = [[] for _ in range(n+1)]
lightGraph = [[] for _ in range(n+1)]
count = 0
standard = (n+1)/2

for _ in range(m):
    heavy, light = map(int, input().split())
    heavyGraph[heavy].append(light)
    lightGraph[light].append(heavy)

def dfs(node, graph):
    # 재귀로직
    global cnt
    cnt+=1
    visited[node] = True
    
    for next in graph[node]:
        if not visited[next]:
            dfs(next, graph)

for marble in range(1,n+1):
    visited = [False] * (n+1)
    cnt = 0
    dfs(marble, heavyGraph)
    if cnt>=standard:
        count+=1
    cnt = 0
    dfs(marble, lightGraph)
    if cnt>=standard:
        count+=1

print(count)