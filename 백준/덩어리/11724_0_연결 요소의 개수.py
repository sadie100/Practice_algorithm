import sys
input = sys.stdin.readline

n,m= map(int,input().split())
graph = [[i] for i in range(n+1)]
minGraph = [i for i in range(n+1)]

for _ in range(m):
    u,v = map(int, input().split())

    minVal = min(minGraph[u],minGraph[v])
    maxVal = max(minGraph[u],minGraph[v])

    minGraph[u] = minVal
    minGraph[v] = minVal

    for node in graph[maxVal]:
        if not node in graph[minVal]:
            graph[minVal].append(node)
        minGraph[node] = minVal
    

set = set(minGraph)
print(len(set)-1)