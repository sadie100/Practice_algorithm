import copy
n, b = map(int, input().split())
matrix = []

for i in range(n):
    matrix.append(list(map(int, input().split())))

def multiply(matrix):
    tmp = [[0]*n for _ in range(n)]
    for row in range(n):
        for col in range(n):
            e = 0
            for k in range(n):
                e += matrix[row][k] * matrix[k][col]
            tmp[row][col] = e % 1000
    return tmp

while(True):
    if b==1:
        matrix = multiply(matrix)
        break
    elif b%2==0:
        matrix = multiply(multiply(matrix))
        b = b//2
    else:
        matrix = multiply(multiply(matrix))
        b = b//2
        

for i in matrix:
    print(" ".join(list(map(str,i))))