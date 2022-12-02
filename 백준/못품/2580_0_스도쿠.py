'''
한 줄 전체 검색과 3x3 검색을 계속 진행하면서 만약 한 칸만 비었을 경우 그 칸을 채운다
칸이 전부 찰 때까지 반복
'''

import sys
input = sys.stdin.readline

board = [[] * 9 for _ in range(9)]
visited = [[False] * 9 for _ in range(9)]
blanks = []

for i in range(9):
    board[i] = list(map(int, input().split()))
    for j in range(9):
        if not board[i][j]:
           blanks.append((i,j)) 

def getColBlank(col):
    blank = []
    nums = [0] * 9
    for j in range(9):
        if board[j][col]==0:
            blank.append((j,col))
        else:
            nums[board[j][col]-1] = 1

    if not blank:
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
        visited[nr][nc] = True
        return True

    return False

def getRowBlank(row):
    blank = []
    nums = [0] * 9
    for i in range(9):
        if board[row][i]==0:
            blank.append((row,i))
        else:
            nums[board[row][i]-1] = 1

    if not blank:
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
        visited[nr][nc] = True
        return True

    return False

def getSquareBlank(rs, cs):
    # 해당 row, col이 속해있는 사각형 영역에서의 체크해 주기
    blank = []
    nums = [0] * 9
    rowStart = rs//3 * 3
    colStart = cs//3 * 3

    for i in range(rowStart, rowStart+3):
        for j in range(colStart, colStart+3):
            if board[i][j]==0:
                blank.append((i, j))
            else:
                nums[board[i][j]-1] = 1

    if not blank:
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
        visited[nr][nc] = True
        return True
    
    return False

while(True):
    flag = True
    newBlank = []
    for row, col in blanks:
        if visited[row][col]:
            continue
        if getSquareBlank(row, col):
            continue
        if getRowBlank(row):
            continue
        if getColBlank(col):
            continue
        newBlank.append((row, col))
        flag = False
    
    if flag:
        break
    
    blanks = newBlank

for row in board:
    newRow = " ".join(map(str, row))
    print(newRow)