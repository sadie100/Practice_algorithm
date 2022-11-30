'''
겹치는 강의는 다른 강의실 쓰도록 한다.
강의실 문제와 동일. 시작하는 시간으로 정렬해서 빠른 것부터 탐색해서 강의실 루트를 만든다
이때 동시에 강의하는 강의실의 경우 끝나는 시간 순으로 정렬해서 항상 빨리 끝나는 강의실부터 채우도록 한다
'''

import sys
input = sys.stdin.readline
import heapq

n = int(input())
classes = []
room = [0] * (n+1)

for _ in range(n):
    num, start, end = map(int, input().split())
    classes.append((start, end, num))

endTime = 0
rooms = [0]*(n+1)
classNow = []
heapq.heapify(classes)

while(classes):
    rest = []
    flag = False
    start, end, num = heapq.heappop(classes)
    for idx, endTime in enumerate(classNow):
        if endTime<=start:
            endTime = end
            rooms[num] = idx
            flag = True
            break
    
    if not flag:
        heapq.heappush(classNow, end)
        rooms[num] = len(classNow)-1

print(len(classNow))
for i in range(1, n+1):
    print(i)