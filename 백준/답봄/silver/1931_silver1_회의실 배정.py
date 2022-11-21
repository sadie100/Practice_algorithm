'''
끝나는 시간 순으로 오름차순 정렬
만약 끝나는 시간이 같다면 시작하는 시간 순으로 오름차순 정렬
빠른 애들부터 넣으면서 확인하기
'''

import sys
input = sys.stdin.readline

n = int(input())

meeting = []
count = 0

for _ in range(n):
    start, end = map(int, input().split())
    meeting.append((start, end))

meeting.sort(key=lambda x:(x[1], x[0]))
endTime = 0

for meetStr, meetEnd in meeting:
    if endTime<=meetStr:
        count +=1
        endTime = meetEnd

print(count)