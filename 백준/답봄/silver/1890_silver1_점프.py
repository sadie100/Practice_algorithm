import sys

input = sys.stdin.readline

k = int(input())
board = [[] for _ in range(k)]
dp = [[0]*(k) for _ in range(k)]
count = 0

for row in range(k):
    board[row] = list(map(int, input().split()))

dp[0][0] = 1

for row in range(k):
    for col in range(k):
        if row == k-1 and col == k-1:
            break
        num = board[row][col]
        now = dp[row][col]
        if (0<=row+num<k):
            dp[row+num][col] += now
        if (0<=col+num<k):
            dp[row][col+num] += now

print(dp[k-1][k-1])