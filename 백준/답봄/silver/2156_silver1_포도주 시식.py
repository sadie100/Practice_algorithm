'''
1. 문제의 시간 제한은?
2초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
10000

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
n^2

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
dp

5. 왜 4라고 생각했는가?
완탐했더니 시간 초과가 뜬다.
n번째까지의 최댓값을 구할 때 n번째 잔 전까지의 값을 활용하므로
최적부분구조, 중복되는 부분 문제를 만족한다.

'''
import sys
input = sys.stdin.readline

n = int(input())

wines = [0] + [int(input()) for _ in range(n)] + [0]
dp = [0] * (n+2)
dp[1] = wines[1]
dp[2] = dp[1] + wines[2]

if n<3:
    print(dp[n])
    exit()

for i in range(3,n+1):
    dp[i] = max(dp[i-3]+wines[i-1]+wines[i], dp[i-2]+wines[i],dp[i-1])

print(dp[n])