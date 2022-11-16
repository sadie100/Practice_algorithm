'''
위상 정렬 :
1. 들어오는 노드가 0인 노드를 큐에 넣고 그 노드에서 빠져나가는 간선을 제거하고
1을 반복하는 정렬

=> 들어오는 노드 수를 저장한 그래프가 있어야 하고
간선을 나타내는 그래프가 있어야 함

일단은 작은 쪽 -> 큰 쪽으로 그래프 생성..
'''

import sys
from collections import deque

input = sys.stdin.readline

n,m = map(int, input().split())

graph = [[] for _ in range(n+1)]
incoming = [0 for _ in range(n+1)]
answer = []

for _ in range(m):
    a,b = map(int, input().split())
    graph[a].append(b)
    incoming[b] += 1

queue = deque([])

for i in range(1, n+1):
    if not incoming[i]:
        queue.append(i)

while(queue):
    node = queue.popleft()

    answer.append(node)
    for arrow in graph[node]:
        incoming[arrow] -= 1
        if incoming[arrow] == 0:
            queue.append(arrow)

print(' '.join(map(str, answer)))