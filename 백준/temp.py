import sys
input = sys.stdin.readline

v, e = map(int, input().split())

adj = list()
for i in range(e):
    a, b, c = map(int, input().split())
    adj.append((a, b, c))

adj.sort(key=lambda x: x[2])

connected = [i for i in range(v+1)]
dic = {i: [i] for i in range(1, v+1)}
total = 0
for a, b, c in adj:
    if connected[a] != connected[b]:
        total += c
        small = min(connected[a], connected[b])
        big = max(connected[a], connected[b])

        for ad in dic[big]:
            dic[small].append(ad)
            connected[ad] = small
print(total)