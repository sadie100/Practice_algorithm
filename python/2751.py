import sys

count = int(sys.stdin.readline())

list = []
for i in range(count):
    list.append(int(sys.stdin.readline()))

list.sort()
for _ in list:
    print(_, sep="\n")