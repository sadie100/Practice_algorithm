'''
겹치는 강의는 다른 강의실 쓰도록 한다.
강의실 문제와 동일. 끝나는 시간으로 정렬해서 빠른 것부터 탐색해서 강의실 루트를 만든다
시간 초과 => 힙 이용
'''

import sys
input = sys.stdin.readline
import heapq

n = int(input())
classes = []
room = [0] * (n+1)
roomOrder = []

for _ in range(n):
    num, start, end = map(int, input().split())
    classes.append((end, start, num))
    roomOrder.append(num)

# classes.sort(key=lambda x:(x[2]))

endTime = 0
now = 1
heapq.heapify(classes)

while(True):
    rest = []
    while(classes):
        end, start, num = heapq.heappop(classes)
        if endTime>start:
            rest.append((end, start, num))
            continue
        endTime = end
        room[num] = now
    
    if not rest:
        break

    endTime = 0
    now+=1
    classes = rest


print(now)
for i in roomOrder:
    print(room[i])