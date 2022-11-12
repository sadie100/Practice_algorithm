'''
프림
'''

import heapq

v, e = map(int,input().split())
graph = [[] for _ in range(v+1)]
visited = [False for _ in range(v+1)]
nodeheap = []
result = 0

for _ in range(e):
    node1, node2, weight = map(int, input().split())
    graph[node1].append([weight, node2])
    graph[node2].append([weight, node1])


# 프림 알고리즘으로 탐색
heapq.heappush(nodeheap, [0,1])

while(nodeheap):
    nextWeight, nextNode = heapq.heappop(nodeheap)
    if visited[nextNode]:
        # 이미 방문한 노드임
        continue
    
    # 해당 간선 선택, 방문
    result += nextWeight
    visited[nextNode] = True

    # 힙에 해당 노드와 연결된 간선들 넣기
    for node in graph[nextNode]:
        if not visited[node[1]]:
            heapq.heappush(nodeheap, node)
    
print(result)