heights = []
for i in range(9):
    heights.append(int(input()))

def dfs(now, dwarves, total, cnt):
    if cnt == 7:
        if total == 100:
            dwarves.sort()
            print('\n'.join(map(str, dwarves)))
            exit()
        else:
            return
    if now == 9:
        return

    dwarves.append(heights[now])
    dfs(now+1, dwarves, total+heights[now], cnt+1)
    dwarves.pop()
    dfs(now+1, dwarves, total, cnt)

dfs(0, [], 0, 0)


# # 전체합 - 두 난쟁이 키 합이 100이어야함

# dwarfs = []

# for i in range(9):
#     dwarfs.append(int(input()))

# sumVal = sum(dwarfs)

# for i in dwarfs:
#     for j in [x for x in dwarfs if i!=x]:
#         if i+j == sumVal-100:
#             print("\n".join(list(map(str, sorted([y for y in dwarfs if y!=i and y!=j])))))
#             exit()