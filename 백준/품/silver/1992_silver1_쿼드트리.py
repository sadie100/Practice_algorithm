'''
반으로 나눠 가면서 압축
'''

n = int(input())
data = []

for _ in range(n):
    data.append(list(map(int, list(input()))))

def divide(line, rowStart, colStart):
    if line==1:
        return str(data[rowStart][colStart])
    flag = -1
    for row in range(rowStart, rowStart+line):
        for col in range(colStart, colStart+line):
            if flag==-1:
                flag = data[row][col]
                continue

            if flag!=data[row][col]:
                # 달라짐
                nextLine = line//2
                one = f'{divide(nextLine, rowStart, colStart)}'
                two = f'{divide(nextLine, rowStart, colStart+nextLine)}'
                three = f'{divide(nextLine, rowStart+nextLine, colStart)}'
                four = f'{divide(nextLine, rowStart+nextLine, colStart+nextLine)}'
                return f'({one}{two}{three}{four})'
    
    # 제대로 옴
    if flag == 1:
        return '1'
    else:
        return '0'
            

result = divide(n, 0, 0)
print(result)