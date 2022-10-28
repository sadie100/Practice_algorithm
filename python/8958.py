count = int(input())

scoreArr = list(input() for x in range(0,count))

for scoreStr in scoreArr:
    totalnum=0
    num=0
    for score in scoreStr:
        if score=='O':
            num+=1
            totalnum+=num
        else:
            num=0
    print(totalnum)