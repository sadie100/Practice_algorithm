count = int(input())

list = []
for i in range(count):
    list.append(int(input()))

list.sort()
for _ in list:
    print(_, sep="\n")