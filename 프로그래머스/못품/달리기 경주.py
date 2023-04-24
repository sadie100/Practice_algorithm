def solution(players, callings):
    rank = {}
    front = {}
    
    frontman = ''
    for idx, player in enumerate(players):
        rank[player] = idx
        front[player] = frontman
        frontman = player
        
    for call in callings:
        print(rank)
        print(front)
        idx = rank[call]
        before = front[call]
        bebefore = front[before]
        rank[call] -= 1;
        rank[before] += 1;
        front[call] = bebefore
        front[before] = call
        
    answer = [None] * len(players)
    
    for key, value in rank.items():
        answer[value] = key
    
    return answer