'''
1. 문제의 시간 제한은?
2초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
100000

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
nlogn

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?


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
    start, end, num = heapq.heappop(heap)
    if not classes:
        heapq.heappush(classes, (end, 1))
        answer[num] = 1
    else:
        newClass = []
        newClassNum = len(classes)+1
        flag = False
        while(classes):
            classend, i = heapq.heappop(classes)
            if classend<=start:
                heapq.heappush(newClass, (end, i))
                answer[num] = i
                flag = True
                break
            else:
                heapq.heappush(newClass,(classend,i))
        if not flag:
            heapq.heappush(newClass, (end, newClassNum))
        classes = newClass

    
print(classes)





# '''
# 겹치는 강의는 다른 강의실 쓰도록 한다.
# 강의실 문제와 동일. 시작하는 시간으로 정렬해서 빠른 것부터 탐색해서 강의실 루트를 만든다
# 이때 동시에 강의하는 강의실의 경우 끝나는 시간 순으로 정렬해서 항상 빨리 끝나는 강의실부터 채우도록 한다
# '''

# import sys
# input = sys.stdin.readline
# import heapq

# n = int(input())
# classes = []
# room = [0] * (n+1)

# for _ in range(n):
#     num, start, end = map(int, input().split())
#     classes.append((start, end, num))

# endTime = 0
# rooms = [0]*(n+1)
# classNow = []
# heapq.heapify(classes)

# while(classes):
#     rest = []
#     flag = False
#     start, end, num = heapq.heappop(classes)
#     for idx, endTime in enumerate(classNow):
#         if endTime<=start:
#             endTime = end
#             rooms[num] = idx
#             flag = True
#             break
    
#     if not flag:
#         heapq.heappush(classNow, end)
#         rooms[num] = len(classNow)-1

# print(len(classNow))
# for i in range(1, n+1):
#     print(i)