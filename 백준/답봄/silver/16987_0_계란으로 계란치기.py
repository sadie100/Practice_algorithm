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
from collections import deque
import sys,copy

input = sys.stdin.readline

n = int(input())
atks = []
eggs = []
queue = deque([])
for _ in range(n):
    s, w = map(int, input().split())
    eggs.append(s)
    atks.append(w)
queue.append([0, eggs])

ans = 0
cnt = 0

while(queue):
    idx, lefteggs = queue.popleft()
    if idx==n:
        break
    if lefteggs[idx]<=0:
        queue.append([idx+1, lefteggs])
        continue
    for i, hp in enumerate(lefteggs):
        cnt+=1
        if i==idx or lefteggs[i]<=0:
            continue
        # neweggs = copy.deepcopy(lefteggs)
        # neweggs[i] = max(0, neweggs[i]-atks[idx])
        # neweggs[idx] = max(0, neweggs[idx]-atks[i])
        # zero_cnt = len(list(filter(lambda x:x == 0, neweggs)))
        # ans = max(ans, zero_cnt)
        # if ans>zero_cnt+n-i:
        #     continue

        queue.append([idx+1, lefteggs])

print(ans)
print(cnt)