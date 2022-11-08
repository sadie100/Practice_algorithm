from collections import deque

n, k = map(int, input().split())

count = 0
removed = []
people = [i for i in range(1,n+1)]
idx=0

# 1 2 4 '5 7
# 4 5 7 '1





while(count<n):
    print('removed',removed)
    print(idx)
    if len(people)>=(k+idx):
        # k번째 사람이 남아있는 경우
        removed.append(people.pop(k+idx-1))
        idx=idx+k-1
    else:
        # k번째 사람이 안 남아있는 경우
        # 원 돌려서 처리해야 함
        tempK = (k+idx)-len(people)
        print(people)
        print('idx',idx)
        print('temp',tempK)
        peopleQueue = deque(people)
        for _ in range(tempK):
            left = peopleQueue.popleft()
            print(peopleQueue)
            print(left)
            peopleQueue.append(left)
        people = list(peopleQueue)
        print('변경', people)
        removed.append(people.pop(idx-tempK))
        idx=len(people)-1
    count+=1

print(f'<{" ".join(map(str,removed))}>')