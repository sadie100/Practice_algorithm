'''
히스토그램에서 높이가 낮아지는 순간이 가장 큰 직사각형이 생기는 순간

스택으로 구한다.
높이가 달라지는 순간을 스택에 넣기
높이가 낮아지는 순간, 스택의 높이들에서 너비 구하기
'''


while(True):
    income = input()
    # 들어온 게 0이면 나가기
    if(income=='0'): break

    num, *heights = map(int, income.split())
    heights.append(0)
    gramList = []
    maximum = 0
    for idx, height in enumerate(heights):
        if len(gramList)==0:
            gramList.append((idx,height))
            continue
        if height>=gramList[-1][1]:
            # 높이가 같거나 높아지는 순간. 그냥 append한다
            gramList.append((idx,height))
        elif height<gramList[-1][1]:
            index = idx
            # 높이가 낮아지는 순간. 이 때 만들어지는 너비들을 maximum과 비교해서 크면 넣는다
            while gramList and height<gramList[-1][1]:
                startWidth, startHeight = gramList.pop()
                while gramList and gramList[-1][1]==startHeight:
                    startWidth = gramList.pop()[0]
                maximum = max(maximum, (index-startWidth) * (startHeight))
                if gramList and height<gramList[-1][1] and startHeight<gramList[-1][1]:
                    index = startWidth
            gramList.append((idx, height))

   
    print(maximum)