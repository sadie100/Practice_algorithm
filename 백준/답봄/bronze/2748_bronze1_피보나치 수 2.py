n = int(input())
d = [0] * (n+1)

d[0] = 0
d[1] = 1

for idx in range(2, n+1):
    d[idx] = d[idx-1]+d[idx-2]

print(d[n])