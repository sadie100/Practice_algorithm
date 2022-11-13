'''
한 번에 연결된 노드집합이 두 개로 양분되면 이분그래프
dfs를 돌리면서 각 노드의 visited를 두 가지 색을 번갈아가며 칠하기
만약 번갈아 칠하는 게 안 될 경우 이분그래프가 아님
'''

import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline

k=int(input())

def dfs(node, color):
    visited[node] = color
    color = -1 if color==1 else 1
    res = True

    for next in graph[node]:
        if visited[next]:
            if visited[next]!=color:
                res = False
        else:
            res = dfs(next, color)
    
    return res

for _ in range(k):
    v,e = map(int, input().split())

    graph = [[] for _ in range(v+1)]
    visited = [0] * (v+1)
    res = True

    for edge in range(e):
        node1, node2 = map(int, input().split())
        graph[node1].append(node2)
        graph[node2].append(node1)

    for i in range(1, 1+v):
        if not visited[i]:
            res = dfs(i, 1)
            if not res:
                break
    
    if not res :
        print('NO')
    else:
        print('YES')
    