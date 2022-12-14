'''
dfs, 백트래킹을 써야 한다..
빈칸을 탐사하며 스도쿠 조건을 만족할 경우 숫자 넣고 dfs+백트랙킹 수행
다 채워졌으면 exit
'''

import sys
input = sys.stdin.readline

board = [[] * 9 for _ in range(9)]
blanks = []

for i in range(9):
    board[i] = list(map(int, input().split()))
    for j in range(9):
        if not board[i][j]:
           blanks.append((i,j)) 

def checkCol(row, num):
    for j in range(9):
        if board[row][j]==num:
            return False

    return True

def checkRow(col, num):
    for i in range(9):
        if board[i][col]==num:
            return False

    return True

def checkSquare(rs, cs, num):
    # 해당 row, col이 속해있는 사각형 영역에서의 체크해 주기
    rowStart = rs//3 * 3
    colStart = cs//3 * 3

    for i in range(rowStart, rowStart+3):
        for j in range(colStart, colStart+3):
            if board[i][j]==num:
                return False

    return True

def dfs(idx):
    if idx == len(blanks):
        for row in board:
            newRow = " ".join(map(str, row))
            print(newRow)
        exit()
    
    br,bc = blanks[idx]
    for i in range(1, 10):
        if checkCol(br, i) and checkRow(bc, i) and checkSquare(br, bc, i):
            board[br][bc] = i
            dfs(idx+1)
            board[br][bc] = 0

dfs(0)
