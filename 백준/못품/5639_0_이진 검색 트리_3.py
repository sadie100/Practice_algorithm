'''
답은 나오지만 메모리/시간초과 나는 코드
'''

import sys
sys.setrecursionlimit(10**7)

tree = {}

inputs = []
for line in sys.stdin.readlines():
    inputs.append(int(line))

before = 0
root = 0


def tree_insert(node, searchPoint):
    if node>searchPoint:
        # 들어온 값이 더 크면 => 우측 자손으로 간다.
        if searchPoint in tree:
            if tree[searchPoint][1]:
                # 만약 이미 있으면 다음 insert를 수행
                return tree_insert(node, tree[searchPoint][1])
            else:
                tree[searchPoint][1] = node
                return
        else:
            # tree안에 searchPoint가 없으면
            tree[searchPoint] = [0, node]
            return
    else:
        # 들어온 값이 더 작으면 => 좌측 자손으로 간다.
        if searchPoint in tree:
            if tree[searchPoint][0]:
                # 만약 이미 있으면 다음 insert를 수행
                return tree_insert(node, tree[searchPoint][0])
            else:
                tree[searchPoint][0] = node
                return
        else:
            tree[searchPoint] = [node, 0]
            return


for node in inputs:
    if root == 0:
        tree[node] = [0,0]
        root = node
        continue

    tree_insert(node, root)


def postorder(now):
    if not now : return

    if now in tree:
        for next in tree[now]:
            postorder(next)
    print(now)


postorder(root)