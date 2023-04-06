n, r, c = map(int, input().split())

graph = [[-1 for i in range(2**n)] for j in range(2**n)]
print(graph)

# 초기숫자 default는 n
# 만약 2**default보다 r+1이 크거나 같은 시점이 오면
# answer값에 2**default * 2**(default-1) 을 더한다.
# r이 홀수면, answer값에 2**n을 더한다. 이후부터는 r 패스
# 만약 default보다 c+1이 크거나 같은 시점이 오면
# answer값에 2**(default-1) * 2**(default-1) 더한다
# answer값에 (c)%2를 더한다.
# default를 1씩 줄이면서 처리한다.
# 2로 나눈 default을 저장해서 받는다.
# 둘 다 default보다 크면, 종료

n 3
r 7
c 7
answer 63

default 3

8*4

answer 40




n_now = n
rnow = n
cnow = n
row = 0
col = 0
rpow = 0
cpow = 0
while(True):
    if rnow-1 > r:
        row = rnow%2
        rnow = rnow//2
        if rnow-1 == r:
            
        rpow +=1
    if cnow != 1:
