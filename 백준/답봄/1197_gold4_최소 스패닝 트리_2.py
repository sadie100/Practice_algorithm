'''
크루스칼
'''
v,e = map(int, input().split())
edgeList = []
# 각 인덱스 노드에 연결된 최소 노드값을 담는 배열
minConnected = [i for i in range(v+1)]
# min값이 key가 될 경우 연결된 모든 노드값을 담는다
connection = {i : [i] for i in range(v+1)}
res = 0

for _ in range(e):
    a,b,c = map(int, input().split())
    edgeList.append((a,b,c))

edgeList.sort(key=lambda edge: edge[2])

# 엣지 작은 것부터 가져옵니다..
for edge in edgeList:
    node1, node2, weight = edge
    if minConnected[node2] != minConnected[node1]:
        # 새로 연결합니다
        res += weight
        minVal = min(minConnected[node1], minConnected[node2])
        maxVal = max(minConnected[node1], minConnected[node2])

        # maxVal에 연결되었던 minConnected를 전부 minVal로 변경
        for i in connection[maxVal]:
            connection[minVal].append(i)
            minConnected[i] = minVal

print(res)
