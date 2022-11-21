'''
배낭 한계 무게+물건 수만큼 원소를 가지는 2차원 dp 배열을 생성
물건 하나씩 돌리면서 각 배낭 한계에 맞도록 dp 배열 채우기
'''

n, k = map(int, input().split())
# n : 물품의 수, k : 버틸 수 있는 무게
things = [] * n
bag = [[] for _ in range(k)]

for i in range(n):
    w, v = map(int, input().split())
    things[i] = (w,v)

for x in range(n):
    for y in range(k):
        