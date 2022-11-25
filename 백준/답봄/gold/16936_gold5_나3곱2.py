'''
수열에서 3으로 나눠지는 수는 앞에 오고, 3으로 나눠지지 않는 수는 뒤에 옴
3의 지수가 높은 순대로 정렬
3의 지수가 같거나 없을 경우, 수가 작은 수대로 정렬
'''

n = int(input())

bList = list(map(int, input().split()))
tempList = []

for num in bList:
    count = 0
    temp = num
    while(not temp%3):
        count+=1
        temp //=3
    tempList.append((count, num))

tempList.sort(key=lambda x:(-x[0], x[1]))

for num in tempList:
    print(num[1],end=" ")