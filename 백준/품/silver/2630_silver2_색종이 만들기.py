'''
색종이 검사하는 함수를 만든다
색종이를 반씩 잘라 가면서 위 함수를 돌린다
    만약 이전 색과 다르면, 그 순간에서 종료하고 반으로 갈라서 재귀로 다시 검사 함수를 돌린다

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
    if paper[startRow][startCol] == -1:
        return
    if startCol>=startCol+length or startRow>=startRow+length:
        return
    elif length==1:
        if paper[startRow][startCol] == 0:
            zeroCount+=1
        else:
            oneCount+=1
        paper[startRow][startCol] = -1
        return

    beforeColor = -1

    for col in range(startCol, startCol+length):
        for row in range(startRow, startRow+length):
            if paper[row][col] == -1:
                continue
            if beforeColor == -1:
                # 처음 들어오는 경우. 현재 색으로 초기화함
                beforeColor = paper[row][col]
            elif paper[row][col] != beforeColor:
                # 틀림
                newLength = length//2
                checkPaper(startCol, startRow, newLength)
                checkPaper(startCol+newLength, startRow, newLength)
                checkPaper(startCol, startRow+newLength, newLength)
                checkPaper(startCol+newLength, startRow+newLength, newLength)
                return
            else:
                 # 만약 맞았는데 마지막 상자였을 경우, 종이 완성하고 리턴
                if col==startCol+length-1 and row==startRow+length-1:
                    # 만약 지금까지 검사한 색종이가 0이거나 1뿐이었을 경우, 여기에 들어옴
                    if paper[startRow][startCol] == 0:
                        zeroCount +=1
                    else:
                        oneCount +=1
                    for k in range(startRow, startRow+length):
                        for m in range(startCol, startCol+length):
                            paper[k][m] = -1
                    return
                    
                
                
checkPaper(0, 0, n)


print(zeroCount)
print(oneCount)