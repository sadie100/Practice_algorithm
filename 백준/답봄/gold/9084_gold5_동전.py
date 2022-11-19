'''
메모이제이션을 저장할 d 배열을 생성한다. d는 goal 금액까지의 원소 수를 가진 배열
가장 작은 동전부터 시작해서 1부터 해당 goal 금액까지 돌려서 구성할 수 있다면 +1
다음 동전으로 넘어가서 검사
    현재 금액에서 동전값 t를 뺀 d[i]가 있으면 + d[현재금액-t]
'''

t = int(input())

for _ in range(t):
    # 테케 돌리기
    n = int(input())
    coins = list(map(int, input().split()))
    goal = int(input())

    d = [0] * (goal+1)
    d[0] = 1
    for coin in coins:
        if coin>goal:break
        for go in range(coin, goal+1):
            if d[go-coin]:
                d[go] += d[go-coin]
    print(d[goal])
