def solution(phone_book):
    answer = True
    
    phone_book.sort()
    
    for i in range(len(phone_book)):
        if i==0: continue
        now = phone_book[i]
        prev = phone_book[i-1]
        
        if now.startswith(prev):
            answer = False
            break
        
    
    return answer