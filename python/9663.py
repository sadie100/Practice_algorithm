'''
queen 하나를 (a,b)에 배치하면,
 모든 (a,i) 라인이 막힘
 모든 (i,b) 라인이 막힘
 for(i=0;i<n;i++){
    모든 
    (a-i)(b-i)
    (a+i)(b-i)
    (a-i)(b+i)
    (a+i)(b+i)
    가 막힘
 }

 한 라인에서 queen 하나를 배치하는 경우의 수를 돌리면서 나머지를 채움
 성립 안하면 return
 성립하면 수+1


 0라인에서 Queen 하나를 배치하고 다음 줄에서 자리가 남을 경우마다 배치를 한다
 

 
'''

n=int(input())
count= 0

def putQueen(width,height,board):
    global count
    if(not board[width][height]): return 0
    if(width==n-1): 
        count+=1
        return

    board[width][height] = 0
    for i in range(n):
        board[width][i] = 0
        board[i][height] = 0
        if width+i<n and height+i<n: board[width+i][height+i] = 0
        if width-i>=0 and height+i<n : board[width-i][height+i] = 0
        if width-i>=0 and height-i>=0 : board[width-i][height-i] = 0
        if width+i<n and height-i>=0 : board[width+i][height-i] = 0
    
    for j in range(height+1,n):
        putQueen(width,j,board)

for i in range(n):
    board = [[1] * n]*n
    putQueen(0,i,board)
    print(board)
