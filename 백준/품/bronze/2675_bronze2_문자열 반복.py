count = int(input())

for case in range(count):
    num, str = input().split(" ")
    for char in str:
        print(char*int(num), end="")
    print("")
