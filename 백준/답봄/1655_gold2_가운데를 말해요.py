'''
중간값을 기준으로 두 개의 힙 생성
leftHeap은 최대힙(루트가 중간값)
rightHeap은 최소힙

번갈아가면서 두 힙에 원소 추가
최대힙과 최소힙 구분해서 leftHeap의 루트가 rightHeap의 루트보다 크면, 두 루트 자리 바꿈
'''

import sys
import heapq

input = sys.stdin.readline

leftHeap = []
rightHeap = []

n = int(input())

for _ in range(n):
    num = int(input())
    if not leftHeap:
        heapq.heappush(leftHeap, -num)
    else:
        if len(leftHeap)>len(rightHeap):
            heapq.heappush(rightHeap,num)
        else:
            heapq.heappush(leftHeap, -num)
    
    if leftHeap and rightHeap and -leftHeap[0] > rightHeap[0]:
        left = -heapq.heappop(leftHeap)
        right = heapq.heappop(rightHeap)
        heapq.heappush(leftHeap, -right)
        heapq.heappush(rightHeap, left)
    
    print(-leftHeap[0])
