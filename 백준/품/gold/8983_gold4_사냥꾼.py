'''
각 사대의 사정거리를 어떻게 구하는가?
- 처음부터 다 지정할 생각 말고 동물 들어올 때마다 가능여부 구하기
- 반복해서 지정은 불가능

1. 사대 위치를 x좌표 오름차순으로 정렬
2. 동물이 들어올 때마다 x좌표에서 가장 가까운 사대를 찾고,
3. 사정거리 = abs(해당 사대 x좌표 - 동물 x좌표)
4. 사정거리가 구해질 때마다 해당 x를 idx로 하는 딕셔너리 만든다(결과 저장용)

2를 탐색할 때 이분탐색 쓰기

'''

sadae, animal, gunLength = map(int, input().split())
s_list = sorted(list(map(int,input().split())))
catchCount = 0
gunList = {}

for _ in range(animal):
    x,y = map(int,input().split())

    if(x in gunList):
        if y<=gunList[x]:
            catchCount+=1
        continue

    nearest = -1
    start = 0
    end = len(s_list)-1

    while(start<=end):
        mid = (start+end)//2

        if s_list[mid]==x:
            # 동물 x좌표에 사대 있음
            nearest = s_list[mid]
            break
        elif s_list[mid]>x :
            end = mid-1
        elif s_list[mid]<x :
            start = mid+1
    
    if(nearest!=-1):
        gunList[x] = gunLength
        if y<=gunLength:
            catchCount+=1
    else:
        if start>len(s_list)-1 :
            start = len(s_list)-1
        if end<0 :
            end = 0
        if abs(x-s_list[start])>abs(x-s_list[end]):
            nearest = s_list[end]
        else:
            nearest = s_list[start]
        
        if abs(x-nearest)<gunLength:
            gunList[x] = gunLength - abs(x-nearest)
        else:
            gunList[x] = 0

        if y<=gunList[x]:
            catchCount+=1

print(catchCount)
        