n = int(input())
route = []
for i in range(n):
    route.append(list(map(int,input().split())))

least_cost=0

def dfs (now, visited, cost):
    visited[now] = True
    to = [d for idx, d in enumerate(route[now]) if not visited[idx]]
    print(to)
    if(len(to)==0):
        least_cost = min(cost+route[now][now],least_cost)
        return
    
    for next in [togo for togo in visited if togo==False]:
        dfs(next, visited, cost+route[now][next])

for i in range(n):
    visited = [False] * n
    dfs(i, visited, 0)

print(least_cost)