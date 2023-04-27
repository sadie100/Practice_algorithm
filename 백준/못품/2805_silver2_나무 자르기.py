n,m = map(int, input().split())
trees = list(map(int, input().split()))

minVal = 1
maxVal = max(trees)
res = 0

while True:
    if minVal>maxVal: break
    half = (minVal+maxVal)//2
    cut = 0
    for tree in trees:
        # 잘라가는 높이를 계산
        if tree>=half:
            cut += tree-half
    
    if cut>=m:
        minVal = half+1
    else:
        maxVal = half-1

print(maxVal)