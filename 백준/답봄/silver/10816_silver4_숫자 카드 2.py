from sys import stdin
input = stdin.readline

def getNumber(start, end, num):
    global cards, answer, dp
    if num in dp:
        return
    if start>end:
        dp[num] = '0'
        return
    half = (start + end)//2
    if num==cards[half]:
        counted = str(cards[start:end+1].count(num))
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

for card in cards:
    if card in dp: continue
    getNumber(0, len(cards)-1, card)

print(' '.join(str(dp[quiz]) if quiz in dp else '0' for quiz in quizes))