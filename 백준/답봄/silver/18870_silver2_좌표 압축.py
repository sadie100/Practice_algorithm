import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))

newNums = sorted(list(set(nums)))
idx_dict = {key:-1 for key in newNums}

for i, num in enumerate(newNums):
    idx_dict[num] = i

for num in nums:
    print(idx_dict[num], end = ' ')