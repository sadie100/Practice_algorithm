'''
bfs로 풀어 보기
'''

import sys
input = sys.stdin.readline
from collections import deque

nodeCount = int(input())
edgeCount = int(input())
graph=[[] for _ in range(nodeCount+1)]
visited=[False] * (nodeCount+1)
count=0

for _ in range(edgeCount):
    node1, node2 = map(int,input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

queue = deque([1])

while(queue):
    node = queue.popleft()
    if visited[node] : continue

    visited[node] = True
    count+=1
    for next in graph[node]:
        if not visited[next]:
            queue.append(next)

print(count-1)