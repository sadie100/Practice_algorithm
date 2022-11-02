'''
4분면 체크

행, 열이 각각 row, col이라 하고,
한 변의 길이/2를 length라 할 때 
첫 번째 사분면 : row+1<=length, col+1<=length
두 번째 사분면 : row+1<=length, col+1>length
세 번째 사분면 : row+1>length, col+1<=length
네 번째 사분면 : row+1>length, col+1>length


n번째 사분면의 값 : length**2 * n

한 번씩 사분면을 찾은 후, 전체 값들을 /2
-> 사분면 범위 축소

if length가 2가 되면, 값 더해서 구하기

'''

n,r,c = map(int,input().split())
number = 2**n

def checkLayer(row, col, num):
    if num == 2:
        if row==1 and col==1: return 0
        elif row==1 and col==2: return 1
        elif row==2 and col==1 : return 2
        elif row==2 and col==2 : return 3
    length = num//2

    if row<=length and col<=length:
        return length**2 * 0 + checkLayer(row, col, length)
    elif row<=length and col>length:
        return length**2 * 1 + checkLayer(row, col-length, length)
    elif row>length and col<=length:
        return length**2 * 2 + checkLayer(row-length, col, length)
    elif row>length and col>length:
        return length**2 * 3 + checkLayer(row-length, col-length, length)

val = checkLayer(r+1,c+1,number)
print(val)