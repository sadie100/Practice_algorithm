n = int(input())
s = list(map(int, input().split()))

total = [0] * (100000*20)

def dfs(num, sum):
    total[sum+s[num]] = 1
    if num+1==n:
        return
    
    dfs(num+1, sum)
    dfs(num+1, sum+s[num])

dfs(0,0)
print(total[1:].index(0)+1)