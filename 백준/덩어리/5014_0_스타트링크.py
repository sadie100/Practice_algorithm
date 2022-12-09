top, now, goal, up, down = map(int, input().split())
ans = 0

def checkdownside(temp):
    button = 0
    if not down: return -1
    if now>=goal and (now-goal)%down == 0:
        # 현재층에서 목표층까지 내려가는 층수가 down으로 나누어 떨어질때
        return (now-goal)//down
    
    # 나누어 떨어지지 않을때.
    # 먼저 아래로 내려놓고 goal과의 차이점이 위로 가는 up의 배수가 될 때 리턴
    if not up: return -1
    while(temp-down>-now):
        temp-=down
        button += 1
        if goal>=temp and (goal-temp)%up == 0:
            return button+((goal-temp)//up)

    return -1

def checkupside(temp):
    button = 0
    if not up: return -1
    if goal>=now and (goal-now)%up == 0:
    # 현재층에서 목표층까지 올라가는 층수가 up으로 나누어 떨어질때
        return (goal-now)//up

    # 나누어 떨어지지 않을때.
    # 먼저 위로 올려놓고 goal과의 차이점이 down의 배수가 될 때 리턴
    if not down: return -1
    while(temp+up<=top+top-now):
        temp += up
        button += 1
        if temp>=goal and (temp-goal)%down == 0:
            return button+((temp-goal)//down)
    return -1

godown = checkdownside(now)
goup = checkupside(now)
if godown<0 and goup<0:
    print("use the stairs")
elif godown>0 and goup>0:
    print(min(godown, goup))
else:
    print(godown if godown>0 else goup)

