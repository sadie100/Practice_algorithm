count = int(input())

scoreArr = list(input() for x in range(0,count))

for scoreStr in scoreArr:
    totalnum=0
    num=0
    splitted = list(scoreStr)
    for score in splitted:
        if score=='O':
            num+=1
            totalnum+=num
        else:
            num=0
    print(totalnum)