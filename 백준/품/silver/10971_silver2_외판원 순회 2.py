n = int(input())

route = []
for i in range(n):
    route.append(list(map(int,input().split())))

least_cost=0

def dfs (now, visited, cost, startIdx):
    global least_cost
    if(least_cost>0 and cost>least_cost): return
    to = [idx for idx, d in enumerate(route[now]) if not visited[idx] and d!=0]
    
    if(len(to)==0):
        if all(flag==True for flag in visited) and route[now][startIdx]!=0:
            least_cost = cost + route[now][startIdx] if least_cost == 0 else min(cost + route[now][startIdx], least_cost)
        return

    for next in to:
        visited[next] = True
        dfs(next, visited, cost+route[now][next], startIdx)
        visited[next] = False

for i in range(n):
    visited = [False] * n
    visited[i] = True
    dfs(i, visited, 0, i)

print(least_cost)