'''
한 줄 전체 검색과 3x3 검색을 계속 진행하면서 만약 한 칸만 비었을 경우 그 칸을 채운다
칸이 전부 찰 때까지 반복
'''

import sys
input = sys.stdin.readline

board = [[] * 9 for _ in range(9)]
visitedR = [False]*9
visitedC = [False]*9
visitedS = [[False]*9 for _ in range(9)]

for i in range(9):
    board[i] = list(map(int, input().split()))

def getColBlank(col):
    blank = []
    nums = [0] * 9
    for j in range(9):
        if board[j][col]==0:
            blank.append((j,col))
        else:
            nums[board[j][col]-1] = 1

    if not blank:
        visitedC[col] = True
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
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
        visitedR[row] = True
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
        return True

    return False

def getSquareBlank(rs, cs):
    blank = []
    nums = [0] * 9
    for i in range(3):
        for j in range(3):
            if board[rs+i][cs+j]==0:
                blank.append((rs+i, cs+j))
            else:
                nums[board[rs+i][cs+j]-1] = 1
    if not blank:
        visitedS[rs][cs] = True
        return True
    if len(blank)==1:
        nr, nc = blank[0]
        blankNum = [idx+1 for idx, num in enumerate(nums) if num==0]
        board[nr][nc] = blankNum[0]
        return True
    
    return False

while(True):
    flag = True
    for now in range(9):
        if now%3 == 0:
            for i in [0,3,6]:
                if visitedS[now][i]: continue
                if not getSquareBlank(now, i):
                    flag = False
        if not visitedR[now]:
            if not getRowBlank(now):
                flag = False
        if not visitedC[now]:
            if not getColBlank(now):
                flag = False
    if flag:
        break

for row in board:
    newRow = " ".join(map(str, row))
    print(newRow)