num = 1

for i in range(3):
    num *= int(input())

strArr = list(str(num))

for chr in range(10):
    print(strArr.count(str(chr)))