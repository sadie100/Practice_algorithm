import sys
input = sys.stdin.readline

str = input().strip()
oprCnt = int(input())
before = list(str)
after = []

def getCommand(com):
    global str, oprCnt, now

    if 'P' in com:
        com, alpha = com.split(" ")
        before.append(alpha)
    elif com=='L':
        if not before: return
        beforeEnd = before.pop()
        after.append(beforeEnd)
    elif com=='D':
        if not after: return
        afterFirst = after.pop()
        before.append(afterFirst)
    else:
        if not before: return
        before.pop()

for _ in range(oprCnt):
    # 명령어 처리
    getCommand(input().strip())

after.reverse()
answer = before + after
print("".join(answer))