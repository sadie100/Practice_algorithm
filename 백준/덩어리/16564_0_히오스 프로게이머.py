import heapq
import sys
input = sys.stdin.readline

teams = []
n, k = map(int, input().split())

for _ in range(n):
    heapq.heappush(teams, int(input()))

while(k>0):
    min1 = heapq.heappop(teams)
    min2 = heapq.heappop(teams)

    dif = min2-min1
    if dif==0:
        # 두 값이 같음
        n=2
        while(teams):
            min3 = heapq.heappop(teams)
            if min2==min3:
                # 다음 값도 같음
                n+=1
            else:
                heapq.heappush(teams, min3)
                break
        if k<n:
            break
        per = k//n
        new = min1+per
        k-=per*n
        for _ in range(n):
            heapq.heappush(teams, new)
        
    elif dif>k:
        # 두 값의 차가 k의 범위 밖에 있음
        minus = dif
        while(minus>1):
            if dif<=k:
                break
            minus = minus//2
        k -= minus
        min1 += minus
        heapq.heappush(teams, min1)
        heapq.heappush(teams, min2)
    elif dif<=k:
        # 두 값의 차가 올릴 수 있는 레벨 k의 범위 안에 있음
        k-=dif
        heapq.heappush(teams, min2)
        heapq.heappush(teams, min2)

print(heapq.heappop(teams))