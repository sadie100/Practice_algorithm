def solution(commands):
    answer = []
    merged = [(i,j) for i in range(51) for j in range(51)]
    content = ["EMPTY" for _ in range(51) for j in range(51)]

    for com in commands:
        coms = com.split()
        if com.find('UPDATE')!=-1:
            if coms[1].isnumeric():
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
            if merged[r][c] == (r,c):
                # r, c인 merged를 본인 것으로 변경
                for i in range(51):
                    for j in range(51):
                        if merged[i][j] == (r,c):
                            merged[i][j] = (i,j)
            else:
                merged[r][c] = (r,c)
        elif com.find('MERGE')!=-1:
            command, *rest = coms
            r1, c1, r2, c2 = list(map(int, rest))
            if(r1==r2 and c1==c2): continue
            
            merged[r1][c1] = (r2,c2)
            table[r1][c1][1].append([r2,c2])
            table[r2][c2][1].append([r1,c1])
            
            merging(table, r1, c1, r2, c2)
            merging(table, r2, c2, r1, c1)
            
            
            if table[r1][c1][0]:
                table[r2][c2][0] = table[r1][c1][0]
            else:
                table[r1][c1][0] = table[r2][c2][0]
        elif com.find('PRINT')!=-1:
            command, *rest = coms
            r, c = list(map(int, rest))
            if table[r][c][0]:
                answer.append(table[r][c][0])
            else:
                answer.append("EMPTY")
    return answer
    
    return answer