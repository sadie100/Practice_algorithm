import sys
input = sys.stdin.readline

N, M = map(int, input().split())

board = []

all_element = 0

for _ in range(N):
    board.append(list(map(int, input().split())))
    all_element += M - board[-1].count(0)

dy = (1, -1, 0, 0)
dx = (0, 0, 1, -1)

def find_start_point():
    for y in range(N):
        for x in range(M):
            if board[y][x] != 0:
                return (y, x)
    return (0, 0)

start_point = find_start_point()

will_remove = []
stack = []

t = 0
sign = 1

# 하루가 지남에 따라 while loop 한바퀴 돔
while True:
    sign *= -1
    t += 1
    count = 0
    board[start_point[0]][start_point[1]] *= -1
    stack.append(start_point)
    while stack:
        y, x = stack.pop()
        count += 1
        value = 0
        for d in range(4):
            if 0 <= y + dy[d] < N and 0 <= x + dx[d] < M:
                if board[y + dy[d]][x + dx[d]] == 0:
                    value += 1
                elif board[y + dy[d]][x + dx[d]] * sign < 0:
                    board[y + dy[d]][x + dx[d]] *= -1
                    stack.append((y + dy[d], x + dx[d]))
                    
        if board[y][x]*sign - value <= 0:
            will_remove.append((y, x))
        else:
            board[y][x] -= value*sign
            start_point = (y, x)
    
    # 덩어리가 2개 이상인 경우
    if count != all_element:
        print(t - 1)
        break
      
    
    # 제거될 친구들 제거
    while will_remove:
        y, x = will_remove.pop()
        board[y][x] = 0
        all_element -= 1
    
    
    # 언제나 한덩이인 채로 모두 녹았을 경우
    if all_element == 0:
        print(0)
        break