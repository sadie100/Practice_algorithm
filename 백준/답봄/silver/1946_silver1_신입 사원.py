'''
한쪽 등수를 오름차순 정렬한다
다른 등수를 최소값 처리하면서 더 작을 경우 넣는다. 반복한다
'''

import sys
input = sys.stdin.readline

t = int(input())
for test in range(t):
    n = int(input())
    applicant = []
    rightMin = 0
    count = 0
    for _ in range(n):
        text, speak = map(int, input().split())
        applicant.append((text, speak))
    applicant.sort()
    for left, right in applicant:
        if not rightMin or rightMin>right:
            rightMin = right
            count += 1
    print(count)
