'''
기본부품만 기록하므로 기본부품을 찾고 다른 부품들을 기본부품으로 치환해야 함

기본부품을 어떤 순서로 찾는지를 위상정렬을 통해 정렬하고, 그 순서대로 기본부품으로 치환해 나간다.
'''

from collections import deque
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
recipe = [{} for _ in range(n+1)]
topology = [[] for _ in range(n+1)]
depended = [0 for _ in range(n+1)]
level = []

for _ in range(m):
    x,y,k = map(int, input().split())
    recipe[x][y] = k
    topology[y].append(x)
    depended[x] += 1

queue = deque([])

for i in range(n):
    if not depended[i]:
        queue.append(i)

while queue:
    i = queue.popleft()
    level.append(i)
    for next in topology[i]:
        depended[next] -= 1
        if not depended[next]:
            queue.append(next)


print(recipe)
for i in level:
    if not recipe[i]: continue

    for part, num in recipe[i].items():
        # 키를 통해 하위 부품으로 교체
        while(True):
            if not recipe[part]: break
            if recipe[part]:
                for newPart, newCnt in recipe[part].items():
                    print(recipe[i])
                    if newPart not in recipe[i]:
                        recipe[i][newPart] = num*newCnt
                    else:
                        recipe[i][newPart] += num*newCnt
                del recipe[i][part]
                    
                    

print(recipe)