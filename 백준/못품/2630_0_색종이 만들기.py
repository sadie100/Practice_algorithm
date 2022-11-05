'''
색종이 검사하는 함수를 만든다
색종이를 반씩 잘라 가면서 위 함수를 돌린다
    각 idx+1를 들어온 length로 나눠서, 나머지가 나누어 떨어지는 지점을 분리 지점으로 한다

만약 잘리는 게 있으면(처리되는 색종이가 있으면) 그 부분을 -1로 바꾼다

색종이가 다 -1 됐으면 종료

'''

n = int(input())

paper = []

for i in range(n):
    paper.append(list(map(int, input().split())))

zeroCount = 0
oneCount = 0

def checkPaper(startCol, startRow, length):
    global zeroCount
    global oneCount
    print(f'호출되었습니다. startCol : {startCol}, startRow:{startRow}, length : {length}')
    if startCol>=n or startRow>=n:
        return
    elif length==1:
        if paper[startRow][startCol] == 0:
            zeroCount+=1
        else:
            oneCount+=1
        paper[startRow][startCol] = -1
        return

    beforeColor = -1
    result = True

    for col in range(startCol, startCol+length):
        for row in range(startRow, startRow+length):
            if paper[row][col] == -1:
                continue
            print(col, row)
            print(f'이전컬러 : {beforeColor}')
            if col==startCol+length-1 and row==startRow+length-1:
                # 나누는 지점
                if result == True:
                    print('***********************종이 ********완성 ************입니다')
                    # 만약 지금까지 검사한 색종이가 0이거나 1뿐이었을 경우, 검사 완료 처리하고 개수 추가
                    if paper[startRow][startCol] == 0:
                        zeroCount +=1
                    else:
                        oneCount +=1
                    for k in range(startRow, col):
                        for m in range(startCol, col):
                            paper[k][m] = -1
                    return
                # checkPaper(startCol + length, row, length)
                # checkPaper(startCol, row + length, length)
                # checkPaper(startCol + length, row + length, length)
            else:
                # 검사하기
                if beforeColor == -1:
                    beforeColor = paper[row][col]
                elif paper[row][col] != beforeColor:
                    # 틀림
                    result = False
                    print(f'새로 호출합니다. startCol : {startCol}, startRow:{startRow}, length : {length//2}')
                    checkPaper(startCol, startRow, length//2)
                    break
                
                
    checkPaper(startCol+length, startRow, length)
    checkPaper(startCol, startRow+length, length)

checkPaper(0, 0, n)


print(zeroCount)
print(oneCount)