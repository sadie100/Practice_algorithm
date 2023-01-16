'''
1. 문제의 시간 제한은?
2초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
n= 8
내구도 300
무게 300

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
n^2

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
dfs / bfs

5. 왜 4라고 생각했는가?

'''
n = int(input())

atk = []
hp = []
ans = 0

for _ in range(n):
    ohp, oatk = map(int, input().split())
    hp.append(ohp)
    atk.append(oatk)

def dfs(now):
    global ans, atk, hp
    #now번째 계란으로 계란 다 깨보기
    if now==n:
        # 다 돌려봄
        cnt = 0
        for i in range(n):
            if hp[i]<=0:
                cnt+=1
        ans = max(ans, cnt)
        return
    if hp[now]<=0:
        return dfs(now+1)
    flag = False
    for i in range(n):
        if i==now or hp[i]<=0:
            continue
        flag = True
        hp[i] -= atk[now]
        hp[now] -= atk[i]
        dfs(now+1)
        hp[i] += atk[now]
        hp[now] += atk[i]
    if not flag:
        dfs(n)

dfs(0)

print(ans)