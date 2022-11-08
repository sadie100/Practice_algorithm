'''
value를 따로 저장해 두는 변수 정의
만약 닫는괄호가 오면, value를 계산해서 누적해 둔다
만약 여는괄호가 오면, 총 값에 value를 적용하고 초기화한다

(가 오면, 스택에 1 저장
)가 오면, 스택에서 pop한 값이 1인지 검사한다. 아닐 경우 break, 0 출력

[가 오면, 스택에 0 저장
]가 오면, 스택에서 pop한 값이 0인지 검사한다. 아닐 경우 break, 0 출력
'''

task = input()
# 괄호 정보를 담는 스택
stack = []

value = 0
point = 0


for char in task:
    if char=='(':
        if len(stack)==0:
            point += value
            value = 0
        if len(stack)>0:
            tempStack = stack.copy()
            while(tempStack):
                tempVal = tempStack.pop()
                if tempVal ==1:
                    value *=2
                else:
                    value *=3
            point += value
            value=0
        stack.append(1)
    elif char == ')':
        if not stack:
            print(0)
            exit()
        val = stack.pop()
        if val!=1:
            print(0)
            exit()

        if value==0:
            value = 2
        else:
            value *= 2
    elif char == '[':
        if len(stack)==0:
            point += value
            value = 0
        if len(stack)>0:
            tempStack = stack.copy()
            while(tempStack):
                tempVal = tempStack.pop()
                if tempVal ==1:
                    value *=2
                else:
                    value *=3
            point += value
            value=0
        stack.append(0)
    elif char == ']':
        if not stack:
            print(0)
            exit()
        val = stack.pop()
        if val!=0:
            print(0)
            exit()
        if value == 0:
            value = 3
        else:
            value *= 3

if stack:
    print(0)
    exit()


point += value
print(point)