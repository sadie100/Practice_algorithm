n = int(input())
nums = list(map(int, input().split()))

newNums = sorted(list(set(nums)))

def find(num, start, end):
    if start>end:
        return start
    half = (start+end)//2
    if num>newNums[half]:
        return find(num, half+1, end)
    elif num<newNums[half]:
        return find(num, start, half-1)
    elif num==newNums[half]:
        return half

ans_dict = {}
ans = ''

for num in nums:
    if num in ans_dict:
        ans += f'{ans_dict[num]} '
        continue

    res = find(num, 0, len(newNums)-1)
    ans += f'{res} '
    ans_dict[num] = res


print(ans.strip())