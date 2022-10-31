'''
1부터 n까지 수 검사하면서 한수 아니면 count 추가하기. 마지막에 n에서 count 빼서 리턴하기
'''

n = int(input())
count=0
for num in range(n+1):
    numStr = str(num)
    gap= 0
    for idx, char in enumerate(numStr):
        if idx==0: continue
        if idx==1: gap = int(char)-int(numStr[0])
        if int(char)-int(numStr[idx-1]) != gap:
            count+=1
            break

print(n-count)
