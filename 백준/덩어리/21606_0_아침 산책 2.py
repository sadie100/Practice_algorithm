'''
0이 실외, 1이 실내
산책의 시작점, 끝점은 실내여야 함
시작점 끝점 제외하곤 실외여야 함
연결하는 노드 수는 자유

실외 점에서 dfs를 돌리면서 각 실외점을 감싸는 실내점들의 개수를 구한다
해당 실내점의 개수 * (실내점의 개수-1)이 그 실외점을 사이에 두는 실내점들의 경우의 수


'''

import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**7)

n=int(input())

isOut = input()
nodeList = [0]*(n+1)
graph = [[] for _ in range(n+1)]
inside = []
outside = []
totalCount = 0
visited = [False]*(n+1)


for idx in range(n):
    if isOut[idx] == '1':
        nodeList[idx+1] = 1
        inside.append(idx+1)
    else:
        outside.append(idx+1)


for _ in range(1,n):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)


def dfs(node):
    global count
    # 만약 1이 왔으면 실내 카운트
    # 0이 왔으면 다음 실내 찾으러 재귀 돌리기

    visited[node] = True

    if nodeList[node]:
        # 실내임
        count+=1
        return

    for next in graph[node]:
        if not visited[next]:
            dfs(next)


for i in outside:
    if visited[i]:continue
    visited[i] = True
    count = 0

    # 실외 애들이랑 붙어 있는 실내 구하기
    for next in graph[i]:
        if not visited[next]:
            dfs(next)

    totalCount += count*(count-1)


# 실내끼리 붙어 있는 수 구하기
for i in inside:
    count = 0
    for next in graph[i]:
        if nodeList[next]:
            dfs(next)
    
    totalCount += count


print(totalCount)