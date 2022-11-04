'''
둘째 줄 정수를 numbers로 받는다
numbers를 내림차순 정렬한 후, 첫 번째 원소부터 합해가면서 다음 원소랑 합하고 하는 식으로 구하기
'''

n,s = map(int, input().split())
numbers=list(map(int, input().split()))

count = 0
numbers.sort(reverse=True)

def sumFunc(idx, sum):
    global count
    sum = sum+numbers[idx]

    if(sum==s):
        count+=1
    if(idx==n-1):
        return
    for index in range(idx+1, n):
        sumFunc(index, sum)
        

for idx, num in enumerate(numbers):
    sumFunc(idx,0)

print(count)