'''
0이 실외, 1이 실내
산책의 시작점, 끝점은 실내여야 함
시작점 끝점 제외하곤 실외여야 함
연결하는 노드 수는 자유

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
    minVal = min(node1, node2)
    maxVal = max(node1, node2)
    graph[minVal].append(maxVal)

def dfs(node):
    global count
    # 만약 0이 왔으면 산책길 중간 처리
    # 만약 1이 왔으면 산책 종료 처리, 리턴
    if nodeList[node]:
        # 실내임
        count+=1
        return

    for next in graph[node]:
        dfs(next)
    

for i in inside:
    # 실내일 때만 시작
    for next in graph[i]:
        dfs(next)

print(count)