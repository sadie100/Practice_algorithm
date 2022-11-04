'''
주어진 연산을 함수화해서 반복시킨다
'''

n= int(input())
count = 0
num=n

def cycle(num):
    add = num//10 + num%10
    return num%10 * 10 + add%10

while(True):
    count+=1
    num = cycle(num)
    if(num==n): break

print(count)