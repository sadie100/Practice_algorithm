# 전체합 - 두 난쟁이 키 합이 100이어야함

dwarfs = []

for i in range(9):
    dwarfs.append(int(input()))

sumVal = sum(dwarfs)

for i in dwarfs:
    for j in [x for x in dwarfs if i!=x]:
        if i+j == sumVal-100:
            print("\n".join(list(map(str, sorted([y for y in dwarfs if y!=i and y!=j])))))
            exit()