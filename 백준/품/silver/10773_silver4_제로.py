from sys import stdin

input()
stack = []

for income in map(int, stdin):
    stack.append(income) if income else stack.pop()

print(sum(stack))