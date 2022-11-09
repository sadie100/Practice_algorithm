'''
집/사무실이 멀리 있는 순으로 오름차순 정렬

각 경우를 테스트
    각 경우의 멀리 있는 수를 철로선분의 끝으로 잡기
    나머지 작은 경우들을 heap을 통해 넣어 보기
    heap의 첫번째 원소가(즉, 최소값이) 멀리있는 수 - 철로선분 길이보다 크거나 같을 때까지 heap에서 뽑기
    남은 heap의 수 저장
    해당 수의 최대값 리턴
'''

import heapq, sys

input = sys.stdin.readline

n = int(input())
hoList = []
maximum = 0

for _ in range(n):
    h, o = map(int, input().split())
    hoList.append([min(h,o),max(h,o)])

roadLength = int(input())

hoList.sort(key=lambda data:data[1])
hoList = [x for x in hoList if x[1]-x[0]<=roadLength]

heap=[]

for homeSet in hoList:
    smallHome, bigHome = homeSet
    aim = bigHome - roadLength
    if(smallHome>=aim):
        heapq.heappush(heap, smallHome)

    while(heap):
        if heap[0] >= aim:
            break
        heapq.heappop(heap)
    
    maximum = max(len(heap), maximum)
    

print(maximum)