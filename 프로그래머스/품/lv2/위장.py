def solution(clothes):
    answer = 0
    closet = {}
    for name, kind in clothes:
        if kind in closet:
            closet[kind].append(name)
        else:
            closet[kind] = [name]
    
    vals = list(closet.values())

    cnt = 1
    for value in vals:
        cnt *= (len(value)+1)
    answer = cnt-1
    return answer