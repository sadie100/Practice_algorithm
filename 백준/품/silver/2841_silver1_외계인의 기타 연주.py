'''
1. 문제의 시간 제한은?
1초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
500000

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
nlogn

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
완전탐색?

5. 왜 4라고 생각했는가?
그냥 반복문 받으면서 한번 쭉 돌리면 될것같은..
'''

import sys
input = sys.stdin.readline

n,p = map(int, input().split())
pressing = [[] for _ in range(n)]
cnt = 0

for _ in range(n):
    string, flat = map(int, input().split())
    if not pressing[string]:
        pressing[string].append(flat)
        cnt += 1
    else:
        nowFlat = pressing[string]
        while(True):
            if not nowFlat:
                nowFlat.append(flat)
                cnt+=1
                break
            nf = nowFlat.pop()
            cnt+=1
            if flat>nf:
                nowFlat.extend([nf, flat])
                break
            elif flat == nf:
                nowFlat.append(nf)
                cnt-=1
                break

print(cnt)