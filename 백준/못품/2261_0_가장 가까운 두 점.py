'''

'''
n = int(input())

xyList=[]

for _ in range(n):
    x,y = map(int,input().split())
    xyList.append([x,y])

setList = set(xyList)
afterSet = list(setList)
if setList.length!= afterSet.length:
    print(0)
    exit()


minimum = -1

xyList.sort(key=lambda x:(x[0],x[1]))


xyOddList = [x for idx,x in enumerate(xyList) if idx%2==1]
xyEvenList = [x for idx,x in enumerate(xyList) if idx%2==0]

length = len(xyOddList)

for idx in range(length):
    x1, y1 = xyOddList[idx]
    x2, y2 = xyEvenList[idx]

    if minimum==-1:
        minimum = (x2-x1)**2 + (y2-y1)**2
        continue
    # x3, y3 = xyOddList[idx-1]
    # x4, y4 = xyEvenList[idx-1]

    minimum = min(minimum, (x2-x1)**2+(y2-y1)**2)

print(minimum)