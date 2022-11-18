'''
트리를 구현하고, 전위순회 중위순회 후위순회를 차례로 시켜서 결과를 출력한다
'''


n = int(input())
tree = {}

for _ in range(n):
    root, left, right = input().split()
    tree[root] = left, right

# 전위 순회 출력
def preorder(now):
    global tree
    if now!='.':
        print(now, end="")
        preorder(tree[now][0])
        preorder(tree[now][1])


preorder('A')
print()

# 중위 순회 출력
def inorder(now):
    global tree
    if now!='.':
        inorder(tree[now][0])
        print(now, end="")
        inorder(tree[now][1])


inorder('A')
print()

# 후위 순회 출력
def postorder(now):
    global tree
    if now!='.':
        postorder(tree[now][0])
        postorder(tree[now][1])
        print(now, end="")

postorder('A')