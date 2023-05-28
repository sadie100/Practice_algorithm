import sys
from collections import deque
input = sys.stdin.readline

n = int(input())

que = deque()

def inputCommand(com):
    if 'push' in com:
        word, num = com.split(" ")
        que.append(num)
    elif com=='front':
        # front
        if que:
            print(que[0])
        else:
            print(-1)
    elif com=='pop':
        #pop
        if que:
            print(que.popleft())
        else:
            print(-1)
    elif com=='size':
        #개수 출력
        print(len(que))
    elif com=='empty':
        #큐가 비어있으면 1, 아니면 0
        if que:
            print(0)
        else:
            print(1)
    elif com=='back':
        #큐에 가장 뒤에 있는 정수 출력. 정수 없으면 -1
        if que:
            print(que[-1])
        else:
            print(-1)

for i in range(n):
    inputCommand(input().strip())