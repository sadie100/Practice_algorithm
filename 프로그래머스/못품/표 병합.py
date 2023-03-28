def merging(table, r1, c1, r2, c2):
    if r1==r2 and c1==c2: return
    for r, c in table[r1][c1][1]:
        if r==r2 and c==c2: continue
        if [r2, c2] in table[r][c][1]:continue
        table[r][c][1].append([r2,c2])
        table[r2][c2][1].append([r,c])
        merging(table, r, c, r2, c2)
        merging(table, r2, c2, r, c)

def unmerging(table, r, c, notR, notC):
    if not table[r][c][1] : return
    removinglist = table[r][c][1]
    if(r!=notR and c!=notC): table[r][c][0] = ''
    table[r][c][1] = []
    
    for r1, c1 in removinglist:
        unmerging(table, r1, c1, notR, notC)
    

def solution(commands):
    answer = []
    # 테이블 값 형태 : [값, merge된 셀 list]
    size = 5
    table = [[['', []] for _ in range(size)] for _ in range(size)]
    
    for com in commands:
        coms = com.split()
        if com.find('UPDATE')!=-1:
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
                for i in range(size):
                    for j in range(size):
                        val, mergeList = table[i][j]
                        if val==val1:
                            table[i][j][0] = val2
        elif com.find('UNMERGE')!=-1:
            # UNMERGE 처리
            command, r, c = coms
            r = int(r)
            c = int(c)
            if len(table[r][c][1])>0:
                for r1, c1 in table[r][c][1]:
                    table[r1][c1][0] =''
                    table[r1][c1][1] = []
                table[r][c][1] = []
        elif com.find('MERGE')!=-1:
            command, *rest = coms
            r1, c1, r2, c2 = list(map(int, rest))
            if(r1==r2 and c1==c2): continue
            print('MERGE', r1, c1, r2, c2)
            
            table[r1][c1][1].append([r2,c2])
            table[r2][c2][1].append([r1,c1])
            
            merging(table, r1, c1, r2, c2)
            merging(table, r2, c2, r1, c1)
            # for r, c in table[r1][c1][1]:
            #     merging(table, r, c, r2, c2)
            #     table[r][c][1].append([r2,c2])
            # for r3,c3 in table[r2][c2][1]:
            #     table[r3][c3][1].append([r1,c1])
            
            
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