'''
스택 운용
반복을 돌리면서 다음 연산 실행
    가장 뒷 값보다 큰 수가 나오면 => 
    printing에 해당 탑번호 입력하도록 하고 스택에서 제거
    큰 수보다 더 큰 수가 나올 때까지 반복
    가장 뒷 값보다 작은 수가 들어오면 =>
    append
'''

razerCount = int(input())
razer = list(map(int, input().split()))

printing = [0]*razerCount
stack = []

for idx, tower in enumerate(razer[::-1]):
    if not stack:
        stack.append([idx, tower])
    else:
        while(stack):
            s_idx, s_tower = stack[-1]
            if tower>s_tower:
                # printing에 입력, 스택에서 제거
                popped = stack.pop()
                printing[razerCount-popped[0]-1] = razerCount-idx
            else:
                break
        stack.append([idx, tower])

print(' '.join(map(str, printing)))