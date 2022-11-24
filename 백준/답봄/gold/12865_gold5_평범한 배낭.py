'''
배낭 한계 무게/물건 수만큼 원소를 가지는 2차원 dp 배열을 생성
각 물건대로 배낭 한계 무게를 돌리면서 최적의 가치를 갖는 dp 배열을 채운다
    만약 현재 물건 무게보다 현재 한계 무게가 작으면 이전 물건 idx 값을 채움
    만약 현재 물건 무게보다 현재 한계 무게가 크면, 다음 두 값을 비교해서 max값 채우기
        1) 이전 물건 현재 무게 idx 값
        2) 현재 물건 무게 + (이전 물건 idx의 현재한계무게-현재물건무게) idx 값
'''

import sys
input = sys.stdin.readline

n, k = map(int, input().split())
# n : 물품의 수, k : 버틸 수 있는 무게
things = [None] * n
dp = [[0]*(k+1) for _ in range(n)]

for i in range(n):
    w, v = map(int, input().split())
    things[i] = (w,v)

for i in range(n):
    weight, value = things[i]
    for nw in range(k+1):
        if nw<weight:
            # 현재 물건 무게가 현재 한계 무게보다 큰 경우
            if i>0:
                dp[i][nw] = dp[i-1][nw]
        else:
            # 현재 물건 무게가 현재 한계무게를 넘어선 경우
            if i>0:
                dp[i][nw] = max(dp[i-1][nw], value + dp[i-1][nw-weight])
            else:
                dp[i][nw] = value

print(dp[-1][-1])