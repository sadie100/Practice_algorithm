'''
n개의 정수를 정렬한다
m개의 정수를 이분탐색으로 찾는다
'''
from sys import stdin, stdout

n = stdin.readline()
aList = sorted(list(map(int, stdin.readline().split())))

m = stdin.readline()
sList = map(int, stdin.readline().split())


def halfSearch(num, pl, pr):
    if(pl>pr):
        return 0
    half = (pl+pr)//2
    if(aList[half] == num):
        # 찾음
        return 1
    elif(aList[half]>num):
        # half가 number보다 크면 => 왼쪽 절반 잘라내기
        return halfSearch(num, pl, half-1)
    else:
        # half가 number보다 작으면=> 오른쪽 절반 잘라내기
        return halfSearch(num, half+1, pr)

end = len(aList)-1

for num in sList:
    stdout.write(str(halfSearch(num, 0, end))+'\n')