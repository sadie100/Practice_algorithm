def solution(commands):
    answer = []
    merged = [[(j,i) for i in range(51)] for j in range(51)]
    content = [["EMPTY" for _ in range(51)] for j in range(51)]
    
    for com in commands:
        coms = com.split()
        if com.find('UPDATE')!=-1:
            if len(coms)==4:
                # 첫 번째 경우
                command, r, c, val = coms
                r = int(r)
                c = int(c)
                x,y = merged[r][c]
                content[x][y] = val
            else:
                # 두 번째 경우
                command, val1, val2 = coms
                for i in range(51):
                    for j in range(51):
                        if content[i][j] == val1:
                            content[i][j] = val2
        elif com.find('UNMERGE')!=-1:
            # UNMERGE 처리
            command, r, c = coms
            r = int(r)
            c = int(c)
            w, h = merged[r][c]
            if merged[r][c] != (r,c):
                written = content[w][h]
                content[w][h] = 'EMPTY'
                content[r][c] = written
            for i in range(51):
                for j in range(51):
                    if merged[i][j] == (w,h):
                        merged[i][j] = (i,j)
                        if i==r and j==c: continue
                        content[i][j] = 'EMPTY'
            
        elif com.find('MERGE')!=-1:
            command, *rest = coms
            r1, c1, r2, c2 = list(map(int, rest))
            if(r1==r2 and c1==c2): continue
            
            w1, h1 = merged[r1][c1]
            w2, h2 = merged[r2][c2]
            if content[w1][h1] == 'EMPTY' and content[w2][h2]!='EMPTY':
                for i in range(51):
                    for j in range(51):
                        if merged[i][j] == (w1,h1):
                            merged[i][j] = (w2,h2)
            else:
                for i in range(51):
                    for j in range(51):
                        if merged[i][j] == (w2,h2):
                            merged[i][j] = (w1,h1)
        elif com.find('PRINT')!=-1:
            command, *rest = coms
            r, c = list(map(int, rest))
            w1, h1 = merged[r][c]
            answer.append(content[w1][h1])
    
    return answer