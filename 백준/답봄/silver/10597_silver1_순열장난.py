'''
1. 문제의 시간 제한은?
1초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
50

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
n^3

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
완전 탐색

5. 왜 4라고 생각했는가?
모든 경우의 수에 공백 넣어서 해본다

'''

kriii = list(input().strip())
kriii.reverse()

result = []
# before = ''
visited = [False] * 51

def dfs(before, maximum):
    if not kriii:
        now = 0
        if before:
            now = int(before)
            if now<1 or now>50 or visited[now]:
                return
            maximum = max(maximum, now)
            # visited[now] = True
            # result.append(now)
        for i in range(1, maximum+1):
            if not visited[i] and i!=now:
                return
        if now==0:
            print(*result)
        else:
            print(*(result+now))
        exit()
    if before=='0':
        return
    popped = kriii.pop()
    now = int(before + popped)
    if now<1 or now>50:
        kriii.append(popped)
        return
    if not visited[now]:
        visited[now] = True
        result.append(now)
        # before = ''
        dfs('',max(maximum, now))
        visited[now] = False
        result.pop()
    # before = str(now)
    dfs(str(now), maximum)
    kriii.append(popped)

dfs('',0)