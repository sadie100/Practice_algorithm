import heapq

h = []

n = int(input())

for _ in range(n):
    num = int(input())
    heapq.heappush(h, num)

val = 0

for i in range(n-1):
    first = heapq.heappop(h)
    next = heapq.heappop(h)
    val += first+next
    heapq.heappush(h,first+next)

print(val)