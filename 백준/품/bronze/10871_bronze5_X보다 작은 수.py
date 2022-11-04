# n,x = map(int,input().split(" "))

# A = map(int, input().split(" "))

# for num in A:
#     if(num<x):
#         print(num,end=" ")

n,x = map(int,input().split(" "))
A = list(num for num in input().split(" ") if int(num)<x)
print(" ".join(A))