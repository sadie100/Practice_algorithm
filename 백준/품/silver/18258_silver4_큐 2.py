from collections import deque
import sys

q = deque()

count = int(input())
for _ in range(count):
    command = sys.stdin.readline()
    if 'push' in command:
        com, num = command.split()
        q.append(num)
    elif 'pop' in command:
        print(q.popleft()) if q else print(-1)
    elif 'size' in command:
        print(len(q))
    elif 'empty' in command:
        print(0) if q else print(1)
    elif 'front' in command:
        print(q[0]) if q else print(-1)
    elif 'back' in command:
        print(q[-1]) if q else print(-1)
    
