from collections import deque

n, k = map(int, input().split())

count = 0
removed = []
people = [i for i in range(1,n+1)]
idx=-1


while(people):
    if len(people)>(k+idx):
        # k번째 사람이 남아있는 경우
        removed.append(people.pop(idx+k))
        idx=idx+k-1
    else:
        # k번째 사람이 안 남아있는 경우
        # 원 돌려서 처리해야 함
        count = k+idx+1-len(people)
        peopleQueue = deque(people)
        for _ in range(count):
            left = peopleQueue.popleft()
            peopleQueue.append(left)

        people = list(peopleQueue)
        removed.append(people.pop())
        idx=len(people)-1
        
    count+=1

print(f'<{", ".join(map(str,removed))}>')