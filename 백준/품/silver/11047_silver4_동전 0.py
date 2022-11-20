'''
동전 큰거부터 되는대로 채운다..
'''

n,k = map(int, input().split())
coins = [0]*n
count = 0
for idx in range(n):
    coins[idx] = int(input())

coins.reverse()

for coin in coins:
    count += k//coin
    k %= coin

print(count)