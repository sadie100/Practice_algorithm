import sys

count = int(sys.stdin.readline())

for num in range(count):
    endNum = int(sys.stdin.readline())
    rootCount = int(endNum**0.5)
    sosuArr = [False, False] + [True]*(endNum-1)

    for i in range(2, rootCount+1):
        if not i:continue
        for j in range(i*2, endNum+1, i):
            sosuArr[j] = False

    sosuList = [i for (i,j) in enumerate(sosuArr) if j==True]

    answer=[]
    for i in sosuList:
        if(endNum-i in sosuList):
            if i>endNum-i:
                break
            answer = [str(i), str(endNum-i)]
    print(" ".join(answer))