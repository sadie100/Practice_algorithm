t = int(input())

solve = [0 for i in range(0,12)]
solve[1] = 1
solve[2] = 2
solve[3] = 4

for i in range(12):
    if i<4: continue
    solve[i] = solve[i-1] + solve[i-2] + solve[i-3]

for _ in range(t):
    num = int(input())
    print(solve[num])
