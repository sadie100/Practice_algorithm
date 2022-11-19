n = int(input())
d = [0] * (n+1)

if n<=3:
    print(n)
else:
    d[1] = 1
    d[2] = 2 #00, 11
    d[3] = 3
    for idx in range(4, n+1):
        d[idx] = ((d[idx-1]%15746) + (d[idx-2]%15746)) % 15746

    print(d[n])