import sys, heapq

input = sys.stdin.readline
inf = sys.maxsize

n = int(input())
m = int(input())
bus = [[] for _ in range(n+1)]
dist = [[inf,[]] for _ in range(n+1)]
heap = []

for _ in range(m):
    start, end, cost = map(int, input().split())
    bus[start].append((end, cost))

start, end = map(int, input().split())
heapq.heappush(heap, (0, start, [start]))

while(heap):
    distance, city, history = heapq.heappop(heap)
    if dist[city][0] < distance:
        continue
    for dest, cost in bus[city]:
        newCost = cost+distance
        if newCost < dist[dest][0]:
            dist[dest][0] = newCost
            dist[dest][1] = history + [dest]
            heapq.heappush(heap,(newCost,dest,history+[dest]))

print(dist[end][0])
print(len(dist[end][1]))
print(*dist[end][1])