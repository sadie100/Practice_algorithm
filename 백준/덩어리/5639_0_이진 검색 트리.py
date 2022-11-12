'''
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

# 부모 값 찾기
def getParent(node, parent):
    '''
    parent는 [최대값, 최소값]의 list
    왼쪽 가지로 이어진 부모보다는 노드 값이 작아야 함
    오른쪽 가지로 이어진 부모보다는 노드 값이 커야 함
    왼쪽 가지로 이어진 부모의 경우 min과 비교해서 최솟값일 경우 담는다
    오른쪽 가지로 이어진 부모의 경우 max과 비교해서 최댓값일 경우 담는다
    '''
    
    parent = [0,0]
    
    
        

# 그래프 그리기
def paintGraph(node):
    print(tree.items())
    emptyNode = [(k,v) for k,v in tree.items() if 0 in v and ((v[0]==0 and node<k) or (v[1]==0 and node>k))]
    
    print(emptyNode)
    if len(emptyNode) == 0:
        tree[node] = [0,0]
        return

    key, val = emptyNode[0]
    
    if node<key:
        tree[key][0] = node
    else:
        tree[key][1] = node
    
    tree[node] = [0,0]

    
for node in inputs:
    # 첫 번째 원소일 경우
    paintGraph(node)


print(tree)


def postorder(now):
    if not now : return

    if now in tree:
        for next in tree[now]:
            postorder(next)
    print(now)


postorder(root)