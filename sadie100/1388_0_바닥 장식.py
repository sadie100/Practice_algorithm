'''
행 단위로 - 체크하고 열 단위로 ㅣ 체크
틀렸어요..
'''

n,m = map(int, input().split())
tile = [[]*(m) for _ in range(n)]
cnt=0
colCnt=0


def checking(word, tileArr):
    stk = []
    global cnt, colCnt
    for ot in tileArr:
        if ot == word:
            if word=='-': colCnt+=len(stk)
            cnt += len(stk)
            stk = []
        else:
            stk.append(2)
        while(True):
            if len(stk)<2: break
            after = stk.pop()
            before = stk.pop()

            if after==before:
                stk.append(after+before)
            else:
                stk.extend([before, after])
                break
    cnt += len(stk)
    if word=='-':colCnt+=len(stk)

# 행 단위로 체크
for idx in range(n):
    colTile = list(input())
    tile[idx] = colTile
    checking('|', colTile)

# 열 단위로 체크
for i in range(m):
    rowTile = []
    for j in range(n):
        rowTile.append(tile[j][i])
    checking('-', rowTile)


print(cnt)
        
