num = int(input())

# 파라미터 : 원반수, 시작점, 보조장대, 도착장대
def hanoi(plate, start, bojo, to):
    if(plate==1): 
        print(start, to)
        return
    
    # 플레이트가 2개 이상일 때 이동시키기
    # n-1개를 보조로 이동, 큰 원반을 to로 이동, 보조의 n-1을 to로 이동
    hanoi(plate-1, start, to, bojo)
    print(start, to)
    hanoi(plate-1, bojo, start, to)

print(2**num-1)
if(num<=20): hanoi(num, 1,2,3)