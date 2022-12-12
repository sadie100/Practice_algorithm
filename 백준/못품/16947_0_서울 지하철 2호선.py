from collections import deque
import sys

input = sys.stdin.readline

n = int(input())
graph = [[]*(n+1) for _ in range(n+1)]
triangle = [False*(n+1) for _ in range(n+1)]
steps = []

for _ in range(n):
    one, two = map(int, input().split())
    graph[one].append(two)
    graph[two].append(one)


def isTriangle(sta, visited):
    # 순환선인지 확인하는 함수
    if triangle[sta]: return True
    triangle[sta] = True
    visited[sta] = True
    
    next = graph[sta]
    res = False
    for node in next:
        if not visited[node]:
            res = isTriangle(node, visited)
            triangle[node] = False
            visited[node] = False
        else:
            res = triangle[node]
        if res:
            break
        # if triangle[node]:
        #     # 순환 생성
        #     return True
        # if not triangle[node]:
        #     res = isTriangle(node)
        #     if not res:
        #         triangle[node] = False
    if not res:
        triangle[sta] = False
        visited[sta] = False
    return res

for i in range(1, n+1):
    visited = [False*(n+1) for _ in range(n+1)]
    isTriangle(i, visited)

for i in range(1, n+1):
    queue = deque([])
    for d in graph[i]:
        queue.append((d, 0))
    while(queue):
        node, dist = queue.popleft()
        
        if triangle[node]:
            steps.append(dist)
            break
        
        for nex in graph[node]:
            queue.append((nex, dist+1))
    
print(steps, sep=" ")