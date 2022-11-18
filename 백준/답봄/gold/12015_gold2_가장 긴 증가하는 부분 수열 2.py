'''
수가 크므로 이분탐색을 이용해서 푼다
'''

n = int(input())
A = list(map(int, input().split()))
answerList = []

for i in range(n):
    if i==0:
        answerList.append(A[i])
    elif A[i]>answerList[-1]:
        # answerList의 맨 뒤 원소보다 현재 인덱스의 A원소가 큰 경우
        # -> answerList 뒤에 붙인다
        answerList.append(A[i])
    else:
        # 현재 인덱스의 A원소가 answerList 맨 뒤 원소보다 작거나 같은 경우
        # -> 들어갈 인덱스를 이분탐색으로 구하고, 해당 인덱스 값을 덮어씌운다
        start = 0
        end = len(answerList)-1
        putting = A[i]

        while(start <= end):
            mid = (start + end)//2
            if answerList[mid]==putting:
                start = mid
                break
            elif answerList[mid]>putting:
                end = mid-1
            elif answerList[mid]<putting:
                start = mid+1
        
        answerList[start] = putting

print(len(answerList))