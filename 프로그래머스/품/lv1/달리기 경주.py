def solution(players, callings):
    info = {}
    frontman = ''
    
    for idx, player in enumerate(players):
        info[player] = {'rank' : -1, 'before' : '', 'after' : ''}
        info[player]['rank'] = idx
        info[player]['before'] = frontman
        if frontman!='':
            info[frontman]['after'] = player
        frontman = player
        
    for player in callings:
        idx = info[player]['rank'];
        playerFront = info[player]['before'];
        player2Front = info[playerFront]['before'];
        playerBack = info[player]['after'];
        
        info[player]['rank'] -= 1;
        info[playerFront]['rank'] += 1;
        info[player]['before'] = player2Front;
        info[player]['after'] = playerFront
        info[playerFront]['before'] = player;
        info[playerFront]['after'] = playerBack;
        if player2Front != '':
            info[player2Front]['after'] = player;
        if playerBack != '':
            info[playerBack]['before'] = playerFront;
        
    answer = [None] * len(players)
    
    for key, value in info.items():
        rank = value['rank']
        answer[rank] = key
    
    return answer