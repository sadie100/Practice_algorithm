def solution(commands):
    answer = []
    # 테이블 값 형태 : [값, merge된 셀 list]
    table = [[['', []] for _ in range(50)] for _ in range(50)]
    
    for com in commands:
        if com.find('UPDATE')!=-1:
            coms = com.split()
            if coms[1].isnumeric():
                # 첫 번째 경우
                command, r, c, val = coms
                r = int(r)
                c = int(c)
                table[r][c][0] = val
                for r,c in table[r][c][1]:
                    table[r][c][0] = val
            else:
                # 두 번째 경우
                command, val1, val2 = coms
                for i in range(50):
                    for j in range(50):
                        val, mergeList = table[i][j]
                        if val==val1:
                            table[i][j][0] = val2
        elif com.find('UNMERGE')!=-1:
            # UNMERGE 처리
            coms = com.split()
            command, *rest = coms
            r, c = list(map(int, rest))
            
        elif com.find('MERGE')!=-1:
            coms = com.split()
            command, *rest = coms
            r1, c1, r2, c2 = list(map(int, rest))
            
                
    
    return answer