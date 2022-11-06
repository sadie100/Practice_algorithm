'''
지수법칙, 나머지 분배 법칙을 이용해서 연산을 잘게 쪼갠다
'''

a,b,c = map(int, input().split())

def divide(a,b,c):
    if b==1:
        return a%c
    else:
        divided = b//2
        if b%2==1:
            return divide(a,divided,c) **2 * a % c
        else:
            return divide(a, divided, c) **2 % c

print(divide(a,b,c))