'''
다익스트라 방식으로 생각을 한다
흰방은 0점, 까만방은 1점
스타트에서 최소 비용으로 end까지 가는 비용을 구한다.
'''

import heapq
import sys
input = sys.stdin.readline

n = int(input())
graph = [[] for _ in range(n)]
pointGraph = [[int(10e9)]*n for _ in range(n)]

for i in range(n):
    graph[i] = list(map(lambda x: 0 if x=='1' else 1, list(input().strip())))

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def sol():
    heapList = [(0,0,0)]

    while heapList:
        row, col, point = heapq.heappop(heapList)
        
        if point > pointGraph[row][col]:
            continue

        for i in range(4):
            newRow = row + dx[i]
            newCol = col + dy[i]

            if 0<=newRow<n and 0<=newCol<n:
                newPoint = point + graph[newRow][newCol]
                if pointGraph[newRow][newCol] > newPoint:
                    heapq.heappush(heapList, (newRow, newCol, newPoint))
                    pointGraph[newRow][newCol] = newPoint

sol()

print(pointGraph[n-1][n-1])