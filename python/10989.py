from sys import stdin, stdout

count = int(stdin.readline())

list = [0]*10001

for i in range(count):
    list[int(stdin.readline())]+=1

for idx, num in enumerate(list):
    if(num):
        for _ in range(num):
            stdout.write(str(idx))
            stdout.write('\n')