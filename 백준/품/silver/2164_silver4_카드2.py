from collections import deque

n = int(input())

card = [i for i in range(1,n+1)]
deck = deque(card)

while(len(deck)>1):
    regard = deck.popleft()
    if len(deck)==1:
        break
    moving = deck.popleft()
    deck.append(moving)

a = deck.popleft()
print(a)