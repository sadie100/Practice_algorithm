'''
1. 문제의 시간 제한은?
1초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
8

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
n^8

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?
완전 탐색

5. 왜 4라고 생각했는가?
그냥 다 해본다. 시간이 널널해서

경우의 수
1번 : 4
2번 : 2
3번 : 4
4번 : 4

'''

import sys

input = sys.stdin.readline
n,m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
rotate_table = {
    'one' : [['r'],['d'],['l'],['u']],
    'two' : [['r','l'],['u','d']],
    'three' : [['u','r'],['r','d'],['d','l'],['l','u']],
    'four' : [['l','u','r'],['u','r','d'],['r','d','l'],['d','l','u']],
    'five' : [['u','l','r','d']]
}
minval = sys.maxsize
ans = 0
tv_list = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            ans+=1
            continue
        if graph[i][j] == 1:
            tv_list.append((i,j,'one'))
        elif graph[i][j] == 2:
            tv_list.append((i,j,'two'))
        elif graph[i][j] == 3:
            tv_list.append((i,j,'three'))
        elif graph[i][j] == 4:
            tv_list.append((i,j,'four'))
        elif graph[i][j] == 5:
            tv_list.append((i,j,'five'))


def light(row, col, type, idx):
    minus = 0
    for dir in rotate_table[type][idx]:
        if 'r' in dir and col+1<m:
            for nc in range(col+1, m):
                if graph[row][nc] == 6:
                    break
                if graph[row][nc]>0:
                    continue
                if graph[row][nc]==0:
                    minus+=1
                graph[row][nc]-=1
        if 'l' in dir and col>0:
            for nc in range(0, col):
                if graph[row][nc] == 6:
                    break
                if graph[row][nc]>0:
                    continue
                if graph[row][nc]==0:
                    minus+=1
                graph[row][nc] -= 1
        if 'u' in dir and row>0:
            for nr in range(0, row):
                if graph[nr][col] == 6:
                    break
                if graph[nr][col]>0:
                    continue
                if graph[nr][col]==0:
                    minus+=1
                graph[nr][col] -= 1
        if 'd' in dir and row+1<n:
            for nr in range(row+1, n):
                if graph[nr][col] == 6:
                    break
                if graph[nr][col]>0:
                    continue
                if graph[nr][col]==0:
                    minus+=1
                graph[nr][col] -= 1
    return minus

def delight(row, col, type, idx):
    for dir in rotate_table[type][idx]:
        if 'r' in dir and col+1<m:
            for nc in range(col+1, m):
                if graph[row][nc] == 6:
                    break
                if graph[row][nc]>0:
                    continue
                graph[row][nc] += 1
        if 'l' in dir and col>0:
            for nc in range(0, col):
                if graph[row][nc] == 6:
                    break
                if graph[row][nc]>0:
                    continue
                graph[row][nc] += 1
        if 'u' in dir and row>0:
            for nr in range(0, row):
                if graph[nr][col] == 6:
                    break
                if graph[nr][col]>0:
                    continue
                graph[nr][col] += 1
        if 'd' in dir and row+1<n:
            for nr in range(row+1, n):
                if graph[nr][col] == 6:
                    break
                if graph[nr][col]>0:
                    continue
                graph[nr][col] += 1

def dfs(idx, now):
    global minval
    if idx==len(tv_list):
        minval = min(now, minval)
        return

    row, col, type = tv_list[idx]
    typelen = len(rotate_table[type])
    for i in range(typelen):
        temp = now
        temp -= light(row, col, type, i)
        dfs(idx+1, temp)
        delight(row, col, type, i)

dfs(0, ans)
print(minval)
