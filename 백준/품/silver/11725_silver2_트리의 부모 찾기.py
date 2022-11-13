'''
일단 간선에 따라 그래프를 배치하고 dfs식으로 부모를 찾는 함수를 지정한다.
'''

import sys
sys.setrecursionlimit(10**7)
input = sys.stdin.readline

n = int(input())
graph = [[] for _ in range(n+1)]
mother = [0 for i in range(n+1)]

for _ in range(n-1):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

def dfs(node):
    for child in graph[node]:
        if not mother[child]:
            mother[child] = node
            dfs(child)

dfs(1)

for i in range(2, n+1):
    print(mother[i])