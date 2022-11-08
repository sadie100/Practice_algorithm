'''
스택이 비었으면 들어오는 원소를 넣는다
스택이 비지 않았으면,
    1) 맨 마지막 원소보다 작은 수가 들어오면, 그냥 넣는다
    2) 맨 마지막 원소보다 큰 수가 들어오면, 마지막 원소가 커질 때까지 pop하고 넣는다
'''

import sys

n = int(sys.stdin.readline())
stack = []

for _ in range(n):
    h = int(sys.stdin.readline())
    if not stack:
        stack.append(h)
    else:
        if h<stack[-1]:
            stack.append(h)
        else:
            while(stack):
                stack.pop()
                if not stack or stack[-1]>h:
                    break
            stack.append(h)

print(len(stack))