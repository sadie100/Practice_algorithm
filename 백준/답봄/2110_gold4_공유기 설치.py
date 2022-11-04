'''
공유기 사이의 거리를 가능한 범위 안에서 임의로 정하고 배치한 후, 문제에서 제시한 개수 조건이 맞는지 확인해서 맞으면 그렇게 배치한다.
이때 임의로 정하는 과정에서 이분탐색을 사용한다.
=> 공유기 사이의 거리는 최소 1, 최대 xN-x1이다.
해당 범위 내에서 조건을 만족하는 거리를 탐색한다.
'''

n,c = map(int, input().split())

homeList= sorted([int(input()) for _ in range(n)])
homeLength = len(homeList)

result = 0
start = 1
end = homeList[-1] - homeList[0]


while(end >= start):
    half = (start + end)//2

    # 배치하기
    beforeDistance = -1
    homeCount = 0
    for home in homeList:
        if(homeCount==0 or home-beforeDistance>=half):
            homeCount+=1
            beforeDistance = home
            if homeCount>c: break

    if homeCount>=c:
        # c개 이상으로 배치되면 => 거리를 넓혀야 함
        result = half
        start = half+1
    elif homeCount<c :
        # c개 미만으로 배치되면 => 거리를 좁혀야 함
        end = half-1
    
print(result)