n,k = map(int,input().split())

number = input()
stack = []
count = 0

for idx, num in enumerate(number):
    if not stack:
        stack.append(num)
        continue
    if num>stack[-1]:
        while stack and num>stack[-1]:
            stack.pop()
            count+=1
            if count==k:
                break
        stack.append(num)
    else:
        stack.append(num)
    if count==k:
        stack.append(number[idx+1:])
        break

# 자른 수가 적을 경우
if count<k:
    for _ in range(k-count):
        stack.pop()

print("".join(stack))