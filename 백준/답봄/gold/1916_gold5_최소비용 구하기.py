'''
다익스트라 알고리즘을 써 보기,,
'''

import heapq
import sys
input = sys.stdin.readline

nodeNum = int(input())
edgeNum = int(input())
graph = [[] for i in range(nodeNum+1)]
leastCostGraph = [int(1e9) for i in range(nodeNum+1)]

for _ in range(edgeNum):
    depart, arrive, cost = map(int, input().split())
    # 그래프에 (비용, 도착점) 형태의 튜플 넣기
    graph[depart].append((cost, arrive))

start, goal = map(int, input().split())


# 노드를 다 돌리면서 최소비용 테이블을 완성한다.
def sol(node):
    leastCostHeap = []
    heapq.heappush(leastCostHeap, (0, node))
    leastCostGraph[node] = 0
    while leastCostHeap:
        # # 해당 노드의 거리들을 heap에 넣는다.
        cost, arrive = heapq.heappop(leastCostHeap)

        # 최저가 수정
        if leastCostGraph[arrive]<cost:
            # 현재 이미 최저가인 경우
            continue

        for nCost, nArrive in graph[arrive]:
            distance = nCost+cost
            if leastCostGraph[nArrive] > distance:
                leastCostGraph[nArrive] = distance
                heapq.heappush(leastCostHeap, (distance, nArrive))

sol(start)
    
print(leastCostGraph[goal])