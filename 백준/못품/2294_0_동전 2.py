'''
동전을 큰 순서대로 정렬해서 큰 놈으로 채우고 나머지를 작은금액으로 채우는 식으로 구해 본다
만약 큰 동전으로 나누어 떨어지지 않으면 백트래킹
나누어 떨어지는 순간 리턴
'''

n,k = map(int, input().split())
useList = [0] * n
coinSet = set()
for _ in range(n):
    coinSet.add(int(input()))

coinList = sorted(list(coinSet), reverse = True)

toSum = k

def dfs(idx):
    global toSum
    cost = coinList[idx]
    toSum -= cost
    useList[i]+=1

i = 0

while(True):
    dfs(i)

    if toSum==0:
        break
    elif toSum<0:
        if i==n-1:
            print(-1)
            exit()
        # 백트랙킹
        toSum += coinList[i]
        useList[i]-=1
        i+=1

print(sum(useList))