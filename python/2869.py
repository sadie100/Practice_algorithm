a,b,v = map(int, input().split())
mox = (v-a)//(a-b)
nameoji = v-(mox)*(a-b)
if(nameoji<=a):
    print(mox+1)
else:
    print(mox+2)
