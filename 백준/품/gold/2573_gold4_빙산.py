import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000)

row,col = map(int, input().split())
graph = [[] for _ in range(row)]
dx = [0, 1, -1, 0]
dy = [1, 0, 0, -1]
iceberg = []

for idx in range(row):
    newRow = list(map(int, input().split()))
    graph[idx] = newRow
    newIndex = [idx for idx, i in enumerate(newRow) if i>0]
    for c in newIndex:
        iceberg.append([idx, c])

def checkOcean(r,c):
    melt = 0
    for i in range(4):
        newx = r+dx[i]
        newy = c+dy[i]
        if 0<=newx<row and 0<=newy<col:
            if not graph[newx][newy]:
                # 바다임
                melt+=1
    
    return melt
    

def timeGo():
    global graph
    change=[]
    for r,c in iceberg:
        if graph[r][c]:
            # 만약 빙산이면 체크하고 녹이기
            melt = checkOcean(r,c)
            change.append([r, c, max(0, graph[r][c] - melt)])

    for r, c, val in change:
        graph[r][c] = val


def dfs(r, c, visited):
    visited[r][c] = True
    for i in range(4):
        newx = r+dx[i]
        newy = c+dy[i]
        if 0<=newx<row and 0<=newy<col:
            if graph[newx][newy] and not visited[newx][newy]:
                dfs(newx, newy, visited)


def getComponent():
    count = 0
    visited = [[False]*col for _ in range(row)]
    for r,c in iceberg:
        if graph[r][c]:
            # 만약 빙산이면 dfs로 붙어있는 거 체크
            if not visited[r][c]:
                count+=1
                dfs(r, c, visited)
    return count


year = 0
while(True):
    count = getComponent()
    if not count:
        print(0)
        break
    if count>1:
        print(year)
        break
    year+=1
    timeGo()