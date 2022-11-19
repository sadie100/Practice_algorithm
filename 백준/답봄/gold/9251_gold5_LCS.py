rowStr = list('0' + input())
colStr = list('0' + input())

dp = [[0] * len(colStr) for _ in range(len(rowStr))]

for row in range(1, len(rowStr)):
    for col in range(1, len(colStr)):
        if rowStr[row] == colStr[col]:
            dp[row][col] = dp[row-1][col-1]+1
        else:
            dp[row][col] = max(dp[row-1][col], dp[row][col-1])


print(dp[-1][-1])