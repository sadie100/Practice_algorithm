n = int(input())
count = 0

def putQueen(row, board):
    global count
    if(row == n-1):
        count+=1
        return
    
    # 다음 row 채울 col 구하기
    # 퀸 배치 조건을 만족해야 배치 가능
    for i in range(n):
        flag= True
        for j in range(row+1):
            # col이 이미 있으면 탈락
            if(board[j] == i):
                flag = False
                break
            # 대각선 겹치면 탈락
            if(abs(row+1-j) == abs(i-board[j])):
                flag=False
                break
        if(flag):
            # 조건 만족했으면 다음 퀸 놓기
            board[row+1] = i
            putQueen(row+1, board)
            board[row+1] = None


for i in range(n):
    # 0부터 시작해서 row 채우기
    board = [0]*n
    board[0] = i
    putQueen(0, board)

print(count)