import sys, heapq
input = sys.stdin.readline

inf = sys.maxsize
v, e = map(int, input().split())
graph = [[] for _ in range(v+1)]
distance = [inf for _ in range(v+1)]
start = int(input())

for _ in range(e):
    u,v,w = map(int, input().split())
    graph[u].append((v,w))

q = []
heapq.heappush(q,(start, 0))
distance[start] = 0

while(q):
    n, dist = heapq.heappop(q)

    if distance[n] < dist:
        continue

    for v,w in graph[n]:
        cost = dist + w
        if distance[v]<cost:
            continue

        distance[v] = cost
        heapq.heappush(q,(v,cost))
    
    
for i in range(1,v+2):
    if distance[i] == inf:
        print('INF')
    else:
        print(distance[i])