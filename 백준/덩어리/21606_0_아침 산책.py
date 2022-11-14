'''
0이 실외, 1이 실내
산책의 시작점, 끝점은 실내여야 함
시작점 끝점 제외하곤 실외여야 함
연결하는 노드 수는 자유

노드마다 visited를 만들고 dfs 비슷한걸 돌리면서 길이 될 때마다 count +1한다
'''

import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**7)

n=int(input())

nodeList = [0]*(n+1)
graph = [[] for _ in range(n+1)]
count = 0

isOut = input()
inside = []

for idx in range(n):
    if isOut[idx] == '1':
        nodeList[idx+1] = 1
        inside.append(idx+1)

for _ in range(1,n):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

def dfs(node):
    global count
    # 만약 0이 왔으면 산책길 중간 처리
    # 만약 1이 왔으면 산책 종료 처리, 리턴
    if nodeList[node]:
        # 실내임
        count+=1
        return
    
    visited[node] = True

    for next in graph[node]:
        if not visited[next]:
            dfs(next)
    
    visited[node] = False

for i in inside:
    # 실내일 때만 시작
    visited = [False]*(n+1)
    visited[i] = True
    for next in graph[i]:
        dfs(next)

print(count)