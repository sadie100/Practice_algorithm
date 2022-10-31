'''
가로세로 두개 리스트 만들기
자르고 나서 남은 변 길이 구하기
각자 가장 큰 길이끼리 곱하기
'''

width, height = map(int,input().split())
widthCutList=[]
heightCutList=[]
num=int(input())

for case in range(num):
    type, cut = map(int,input().split())
    if type==0:
        widthCutList.append(cut)
    else:
        heightCutList.append(cut)


widthCutList.append(height)
heightCutList.append(width)

widthCutList.sort()
heightCutList.sort()

widthList = [w if idx==0 else w-widthCutList[idx-1] for idx, w in enumerate(widthCutList)]
heightList = [h if idx==0 else h-heightCutList[idx-1] for idx, h in enumerate(heightCutList)]

print(max(widthList) * max(heightList))

