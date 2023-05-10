import sys
input = sys.stdin.readline

roomNum = input().strip()
used = {str(i): 0 for i in range(10)}
duplist = ['6','9']

for number in roomNum:
    if number in duplist:
        if used['6']>used['9']:
            number = '9'
        elif used['9']>used['6']:
            number = '6'
    used[number] += 1

print(max(used.values()))