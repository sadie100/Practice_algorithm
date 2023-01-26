'''
1. 문제의 시간 제한은?
2초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
100000

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
nlogn

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
힙

5. 왜 4라고 생각했는가?

'''

import sys, heapq
input = sys.stdin.readline

heap = []
n = int(input())
answer = [0]*(n+1)
classes = []

for _ in range(n):
    num, start, end = map(int, input().split())
    heapq.heappush(heap, (start, end, num))

while(heap):
    nextRoom = len(classes)+1
    start, end, num = heapq.heappop(heap)
    if classes and classes[0][0]<=start:
        nextRoom = classes[0][1]
        answer[num] = classes[0][1]
        heapq.heappop(classes)
    else:
        answer[num] = nextRoom

    heapq.heappush(classes, (end, nextRoom))


print(len(classes))
for i in answer[1:]:
    print(i)
