def func(x):
    reversed = list(x)
    reversed.reverse()
    return int("".join(reversed))

num1, num2 = map(func, input().split(" "))
print(max(num1, num2))
