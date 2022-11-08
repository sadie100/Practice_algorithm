t = int(input())

for _ in range(t):
    stack = []
    test = input()
    for char in test:
        if char == '(':
            stack.append(1)
        elif stack:
            if stack[-1]==1:
                stack.pop()
        else:
            stack.append(-1)
    
    print('NO') if stack else print('YES')