'''
bfs 돌리면 메모리 초과가 뜨므로 머리를 좀더 쓴다...
도착점에서 시작해서 거꾸로 가기
'''

l,r = map(int, input().split())
leftCnt = 0
rightCnt = 0
while(l>1 and r>1):
    if l>r:
        # 왼쪽이 더 크면, 오른쪽 위로 보낸다
        leftCnt += 1
        l -= r
    elif r>l:
        # 오른쪽이 더 크면
        rightCnt += 1
        r -= l

leftCnt += l-1
rightCnt += r-1

print(leftCnt, rightCnt)
