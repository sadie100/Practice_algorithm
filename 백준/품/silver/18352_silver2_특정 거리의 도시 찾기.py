import sys
input = sys.stdin.readline
from collections import deque

nodeNum,edgeNum,goal,start = map(int, input().split())
city = set()

graph=[[] for _ in range(nodeNum+1)]

for _ in range(edgeNum):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)

visited = [False] * (nodeNum+1)
todo = deque([[start, 0]])

while(todo):
    node, distance = todo.popleft()
    if visited[node]: continue

    if distance == goal:
        city.add(node)
        continue

    visited[node] = True

    for next in graph[node]:
        if not visited[next]:
            todo.append([next, distance+1])
    

cityList = sorted(list(city))
if not cityList:
    print(-1)
else:
    print('\n'.join(map(str, cityList)))

