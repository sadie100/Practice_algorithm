'''
스택으로 구현
'''

words = str(input())
explode = str(input())
expLength = len(explode)

stack = []

for char in words:
    stack.append(char)
    if "".join(stack[-expLength:]) == explode:
        for _ in range(expLength):
            stack.pop()


print("FRULA" if not stack else "".join(stack))