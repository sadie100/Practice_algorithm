'''
뒤에서부터 순열 나누기
'''

kriii = list(input())

flag = False
backed = []

now = ''
while(kriii):
    i = kriii.pop()
    if i!='0':
        now = i+now
        continue
    
    if now != '':
        backed.append(now)
    j = ''
    while(True):
        if i!='0':
            kriii.append(i)
            break
        j = i + j
        i = kriii.pop()
    now = j

if now!='':
    backed.append(now)

print(' '.join(backed[::-1]))