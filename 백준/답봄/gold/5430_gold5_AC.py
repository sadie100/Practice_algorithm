import sys
input = sys.stdin.readline

from collections import deque

T = int(input())

def changeNum(func, arr):
    global rFlag
    if func == 'R':
        # 수 순서 뒤집기
        rFlag = not rFlag
    elif func == 'D' :
        if not arr:
            return 'error'
        # 만약 rFlag=true면 맨 뒤 수 버리기.
        # 만약 rFlag=false면 첫 번째 수 버리기
        if rFlag:
            arr.pop()
        else:
            arr.popleft()

for _ in range(T):
    rFlag = False
    functions = list(input())
    cnt = int(input())
    numberStr = input().strip().strip('[').strip(']')
    numbers = deque()
    if numberStr:
        numbers = deque(list(map(int,numberStr.split(','))))
    res =''
    for fun in functions:
        res = changeNum(fun, numbers)
        if res=='error':
            break
    if res=='error':
        print(res)
    else:
        if rFlag:
            numbers.reverse()
        print(f'[{",".join(str(x) for x in numbers)}]')