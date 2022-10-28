count=int(input())

for case in range(count):
    student = list(map(int, input().split(" ")))
    s_count= student.pop(0)
    avr = sum(student)/s_count
    count=0
    for std in student:
        if(std>avr):
            count+=1
    print(format(count/s_count * 100,'.3f'),'%',sep="")
    
