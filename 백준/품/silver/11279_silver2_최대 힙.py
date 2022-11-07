import heapq
import sys

h = []

n = int(sys.stdin.readline())

for _ in range(n):
    num = int(sys.stdin.readline())
    if(num>0):
        # 힙에 해당 숫자 삽입
        heapq.heappush(h, -num)
    elif num==0:
        if len(h)==0:
            print(0)
        else:
            # 힙에서 제일 큰 숫자 꺼내고 print
            result = -heapq.heappop(h)
            print(result)
