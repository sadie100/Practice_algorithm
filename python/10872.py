n = int(input())

def fac(num):
    if(num==0):
        return 1
    return num*fac(num-1)

print(fac(n))