import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split(" ")))
x = int(input())

answers = [0] * 1000001

for num in numbers:
    if 0<x-num<1000000:
        if x-num==num:
            answers[num]+=1
        else:
            answers[num]+=1
            answers[x-num]+=1

answer = 0
for num in numbers:
    if answers[num]==2: answer+=1

print(answer//2)