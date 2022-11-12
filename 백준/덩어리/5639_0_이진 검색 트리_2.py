'''
값이 들어오다가 커지는 순간 -> 한 층 높은 트리에 둬야 함
뻘짓한 코드
'''
import sys
sys.setrecursionlimit(10**7)

tree = {}

inputs = []
for line in sys.stdin.readlines():
    inputs.append(int(line))

before = 0
root = 0

for num in inputs:
    print(tree)
    print('현재',num)
    print('직전',before)
    if before==0:
        root = num
        before = num
        continue
    if before > num:
        # 자식으로 둬야 함
        if before in tree:
            tree[before][1] = num
        else:
            tree[before] = [num]
    else:
        # 새로 들어온 숫자가 직전 들어온 숫자보다 클 경우
        # 만약 부모보다 크면 부모의 두 번째 자식으로 가야 하고, 부모보다 작으면 직전 들어온 숫자(before)의 두 번째 자식으로 가야 함
        # 부모보다 큰데 부모의 두 번째 자식이 차 있을 경우엔 한 계층 위로 올라감
        while(True):
            parent = [k for k,v in tree.items() if before in v][0]
            print('부모',parent)
            if parent<num:
                # 부모보다 크면
                if len(tree[parent])>=2:
                    before = parent
                else:
                    tree[before].append(num)
                    break
            else:
                # 부모보다 작으면
                tree[before] = [0,num]
                break

    before = num


def postorder(now):
    if not now : return

    if now in tree:
        for next in tree[now]:
            postorder(next)
    print(now)


postorder(root)