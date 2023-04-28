
def getNum(number):
    minNum = -10000000
    maxNum = 10000000
    flag = False

    while(True):
        if minNum>maxNum : break
        half = (minNum)+(maxNum)//2
        if number==half:
            flag=True
            break
        elif number>half:
            maxNum = half-1
        else:
            minNum = half+1
        
    return flag

n = int(input())
cards = list(map(int, input().split()))
m = int(input())
quizes = list(map(int, input().split()))

cntObj = dict.fromkeys(set(cards).union(set(quizes)), 0)

for card in cards:
    cntObj[card] += 1

answer= ''
for quiz in quizes:
    res = cntObj[quiz]
    answer += ' ' + str(res)
    # if quiz in cntObj:
        
    # else:
    #     answer += ' ' + '0'

print(answer.strip())