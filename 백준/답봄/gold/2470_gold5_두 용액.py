'''
투포인터 문제
리스트의 양쪽 포인터를 지정해서 줄여 가면서 구한다
'''

n = int(input())
intList = sorted(list(map(int, input().split())))

start = 0
end = len(intList)-1

total = None
addNum1 = None
addNum2 = None

while(start<end):
    sumVal = intList[start] + intList[end]
    
    if (total is None) or abs(sumVal)<abs(total):
        total = sumVal
        addNum1 = intList[start]
        addNum2 = intList[end]
    
    if sumVal ==0 :
        # 0 달성 => 그대로 break
        break
    elif sumVal>0 :
        # 0보다 크면 end 줄이기
        end-=1
    elif sumVal<0:
        start+=1
    
print(addNum1, addNum2)