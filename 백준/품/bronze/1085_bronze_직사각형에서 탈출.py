"""
x,y는 직사각형 안에 있다
=> 최솟값은 x,y,w-x,h-y 중 하나다
"""
x,y,w,h = map(int, input().split(" "))

print(min([x,y,w-x,h-y]))