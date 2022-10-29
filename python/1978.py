count = int(input())

nList = map(int, input().split())

sosu_count=0
for n in nList:
    flag=True
    if(n<2):
        flag=False
    for number in range(2,n):
        if (n%number==0):
            flag=False
    if flag:   
        sosu_count+=1

print(sosu_count)