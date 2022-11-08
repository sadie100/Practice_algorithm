import sys

n = int(sys.stdin.readline())
stack = []

def command(str):
    global stack
    if 'push' in str:
        com, num = str.split()
        stack.append(int(num))
    elif str == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)
    elif str == 'size':
        print(len(stack))
    elif str == 'empty':
        if stack:
            print(0)
        else:
            print(1)
    elif str == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)

[command(sys.stdin.readline().strip()) for _ in range(n)]
    