from sys import stdin
input = stdin.readline

def getNumber(start, end, num):
    global cards, answer, dp
    if num in dp:
        answer += ' ' + dp[num]
        return
    if start>end:
        answer += ' 0'
        return
    half = (start + end)//2
    if num==cards[half]:
        counted = str(cards[start:end+1].count(num))
        answer += ' ' + counted
        dp[num] = counted
        return
    elif num>cards[half]:
        getNumber(half+1, end, num)
    else:
        getNumber(start, half-1,num)

n = int(input())
cards = list(map(int, input().split()))
m = int(input())
quizes = list(map(int, input().split()))
dp = {}

cards.sort()
answer = ''

for quiz in quizes:
    if quiz in dp: continue
    getNumber(0, len(cards)-1, quiz)

print(answer.strip())