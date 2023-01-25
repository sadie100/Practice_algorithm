import sys, heapq
input = sys.stdin.readline

inf = 100_000_000
v, e = map(int, input().split())
graph = [[] for _ in range(v+1)]
distance = [inf]*(v+1)
start = int(input().strip())

for _ in range(e):
    u,v,w = map(int, input().split())
    graph[u].append((v,w))

q = []
heapq.heappush(q,(0,start))
distance[start] = 0

while(q):
    dist, n = heapq.heappop(q)

    if distance[n] < dist:
        continue

    for v,w in graph[n]:
        cost = dist + w
        if distance[v]<cost:
            continue

        distance[v] = cost
        heapq.heappush(q,(cost, v))
    
    
for i in distance[1:]:
    if i == inf:
        print('INF')
    else:
        print(i)