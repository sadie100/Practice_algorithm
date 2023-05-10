import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split(" ")))
x = int(input())

answers = [0] * 1000001

for num in numbers:
    if num>=x: continue
    if x-num==num: continue
    answers[num]+=1
    answers[x-num]-=1

answer = 0
for num in numbers:
    if answers[num]==0: answer+=1

print(answer//2)