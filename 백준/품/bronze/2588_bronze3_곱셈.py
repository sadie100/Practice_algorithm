# a = int(input())
# b = input()

# listb = list(map(int, list(b)))
# listb.reverse()

# for num in listb:
#     print(a*num)

# print(a*int(b))

a = int(input())
b = input()


for num in b[::-1]:
    print(a*int(num))

print(a*int(b))