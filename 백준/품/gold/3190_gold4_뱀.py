'''
board를 정의한다
    - 보통의 좌표엔 0값
    - 사과가 있는 곳은 1이 들어가 있음
    - 뱀이 있는 곳은 2가 들어가 있음
'''

from collections import deque

snake = deque([[0,0]])

n = int(input())
k = int(input())
board = [[0 for x in range(n)] for y in range(n)]
turn = {}
count = 0

rowMove = [0,1,0,-1]
colMove = [1,0,-1,0]
dir = 0

# 뱀 위치
rowNow = 0
colNow = 0
board[rowNow][colNow] = 2

# 사과 위치
for _ in range(k):
    row, col = map(int, input().split())
    board[row-1][col-1] = 1

L = int(input())

for _ in range(L):
    sec, direction = input().split()
    turn[int(sec)] = 1 if direction=='D' else -1

while(True):
    if count in turn:
        # 방향이동하는 시간이라면
        dir += turn[count]
        if dir==-1:
            dir = 3
        elif dir==4:
            dir = 0

    newRow = rowNow + rowMove[dir]
    newCol = colNow + colMove[dir]
    count+=1

    if newRow<0 or newRow==n or newCol<0 or newCol==n:
        # 보드 이탈
        break

    if board[newRow][newCol]==2:
        # 뱀이랑 마주침
        break
    
    if board[newRow][newCol]==1:
        # 사과 먹음
        snake.append([newRow, newCol])
    elif board[newRow][newCol]==0:
        # 보통의 칸
        snake.append([newRow, newCol])
        leftRow, leftCol = snake.popleft()
        board[leftRow][leftCol] = 0

    # 뱀 길이에 따라 board 변환
    for x,y in snake:
        board[x][y] = 2

    rowNow = newRow
    colNow = newCol

print(count)