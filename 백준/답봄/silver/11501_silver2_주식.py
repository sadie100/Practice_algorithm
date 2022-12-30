'''
1. 문제의 시간 제한은?
5초

2. 문제의 최대 N값은?(항상 N이 아닐 수도 있으며, 여러 개일 수도 있음)
1,000,000

3. 1, 2를 바탕으로 이 문제에서 허용하는 최대 시간 복잡도는?
NlogN

4. 3을 바탕으로 문제를 읽었을 때 사용할 수 있는 알고리즘은?


5. 왜 4라고 생각했는가?

1) 숫자들을 받고, 뒤에서부터 탐색 돌린다
2) 이익 총합을 저장할 profits 변수와 max값을 저장할 max 변수를 0으로 초기화한다.
3) 뒤에서부터 돌리면서 가장 큰 수(=최대 수)를 max에 저장해서, 최대 수에서 각 수를 뺀 값(이익값)을
profits에 더해서 저장한다.
4) 만약 최대 수보다 현재 수가 크면, 큰 수를 바꾸고 해당 인덱스 다음부터는 해당 수에서 빼서
이익값을 생성한다
4) 배열 탐색이 끝나고 profits을 print한다.
'''

import sys

input = sys.stdin.readline
t = int(input())
for _ in range(t):
    n = int(input())
    nums = list(map(int, input().split()))
    profits = 0
    max = 0
    for num in nums[::-1]:
        if max<num:
            max = num
        elif max>num:
            profits+=max-num
    print(profits)