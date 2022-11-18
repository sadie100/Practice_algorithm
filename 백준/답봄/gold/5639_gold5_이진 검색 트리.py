'''
트리를 따로 만들고 후위순회를 하면 메모리/시간초과가 나므로, 전위순회 결과에서 바로 후위순회 결과를 뽑는다.
전위순회는 루트-왼쪽-오른쪽이고, 후위는 왼쪽-오른쪽-루트이므로,
전위에서 값이 떨어지다가 커지는 시점(오른쪽 부트리의 시작시점)마다 끊어서 재귀를 돌리고,
왼쪽값부터 나오도록 한다.
'''

import sys
sys.setrecursionlimit(10**7)

inputs = []
for line in sys.stdin.readlines():
    inputs.append(int(line))

def postorder(start, end):
    if start>end:
        return
    
    mid=end+1

    for i in range(start+1, end+1):
        if inputs[start]<inputs[i]:
            mid = i
            break
    
    postorder(start+1, mid-1)
    postorder(mid, end)

    print(inputs[start])

postorder(0, len(inputs)-1)