# arr=[]

# for i in range(1,10):
#     arr.append(int(input()))

# print(max(arr), arr.index(max(arr))+1, sep="\n")


arr = list(int(input()) for i in range(1,10))

print(max(arr), arr.index(max(arr))+1, sep="\n")