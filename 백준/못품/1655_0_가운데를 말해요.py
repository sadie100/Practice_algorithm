import sys

h = []
n = int(sys.stdin.readline())

for i in range(1,n+1):
    h.append(int(sys.stdin.readline()))
    h.sort()
    idx = (i-1)//2 if ((i-1)%2==0) else (i-1)//2
    print(h[idx])
