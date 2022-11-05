n = int(input())
A = list(map(int, input().split()))

dp_list = [0] * n

for i in range(n):
    val = 1
    for j in range(i):
        if A[i] > A[j]:
            # j번째보다 더 클 때, j+1을 한 게 i번째 부분수열 길이
            val = max(val, dp_list[j]+1)
    dp_list[i] = val

print(max(dp_list))

