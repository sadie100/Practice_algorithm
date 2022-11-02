'''
영역을 2차원배열로 만들기
들어온 영역 중 최댓값과 최솟값을 각각 maxHeight과 minHeight로 저장
count 중 maximum을 저장할 maxCount 생성
height를 minHeight부터 maxHeight로 돌리면서, 물에 잠겼는지의 여부를 체크하는 함수 dfs 돌린다.
    안전영역 개수를 저장하는 count 선언
    체크 여부를 저장하는 visited 배열 만든다.(같은 수의 이차원배열, 0 : 체크안함, 1 : 체크함)
    인접지역을 돌리면서, 만약 모든 인접지역 탐사가 끝나면 count를 1 더한다.
    maxCount와 count 비교, 큰 값을 maxCount에 저장
    하나의 탐사가 끝나면 visited 0인 곳을 찾아서 dfs 돌린다
'''
import sys
sys.setrecursionlimit(100000)

num = int(sys.stdin.readline())

maxCount = 0
region = [[] for i in range(num)]
maxHeight = -1
minHeight = 101

for i in range(num):
    line = list(map(int, sys.stdin.readline().split()))
    maxHeight = max(maxHeight, max(line))
    minHeight = min(minHeight, min(line))
    region[i]=line


dx = [-1,0,1,0]
dy = [0,1,0,-1]

# 주변영역 검사하는 함수
def dfs(row, col, visited, std):
    visited[row][col] = 1
    for i in range(4):
        # 범위 밖 처리
        if(row+dx[i]<0 or row+dx[i]>num-1 or col+dy[i]<0 or col+dy[i]>num-1): continue
        # visited 완료된 경우 제외
        if(visited[row+dx[i]][col+dy[i]]): continue
        if(region[row+dx[i]][col+dy[i]]>std):
            dfs(row+dx[i], col+dy[i], visited, std)
        else:
            visited[row+dx[i]][col+dy[i]] = 1
    return

for height in range(minHeight, maxHeight):
    if(minHeight == maxHeight):
        maxCount = max(maxCount,1)
        continue
    visited = [[0 for i in range(num)] for i in range(num)]
    count=0
    for i in range(num):
        for j in range(num):
            if(not visited[i][j]):
                if(region[i][j]>height):
                    count+=1
                    dfs(i,j,visited,height)
                else:
                    visited[i][j] = 1
    maxCount = max(maxCount,count)

print(1 if maxCount==0 else maxCount)