from itertools import permutations

n = int(input())
arr = list(map(int,input().split()))
maximum=0

def get(list):
    total = 0
    for idx in range(len(list)-1):
        total += abs(list[idx]-list[idx+1])
    return total

permu = list(permutations(arr,n))

for li in permu:
    maximum = max(get(li), maximum)
print(maximum)