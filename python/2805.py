'''
자를 높이를 이분탐색으로 정한다
높이 a를 자르기로 결정하고 잘라가는 높이 ah를 계산
만약 ah가 m보다 작으면, a를 이분탐색으로 낮춘다
만약 ah가 m보다 크면, a를 이분탐색으로 높인다
만약 ah가 m과 같으면 해당 a를 구한다
만약 이분탐색하는 배열 원소가 하나만 남는데 일치하지 않으면, ah를 m과 비교해서 부합하는 값을 구한다
'''


n, m = map(int, input().split())
trees = list(map(int, input().split()))
start, end = 0, max(trees)


result = -1
while(True):
    half = (start + end)//2
    # 잘라가는 높이를 계산
    cutting=0
    for tree in trees:
        if(tree-half>0):
            cutting+=tree-half

    if cutting == m:
        result = half
        break

    elif (start == end):
        # 완전히 같은 경우는 없게 됨
        if cutting>m:
            result = start
            break
        elif cutting<m:
            result = start-1
            break
    elif cutting>m :
        start = half+1
    elif cutting<m : 
        end = half-1

print(result)