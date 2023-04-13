def solution(prices):
    answer = [len(prices)-(i+1) for i in range(len(prices))]
    stack = []
    
    for i in range(len(prices)):
        price = prices[i]
        while(stack):
            time, val = stack[-1]
            if val>price:
                # 가격 떨어짐
                stack.pop()
                answer[time] = i-time
            else:
                break
        stack.append((i, price))

    
    return answer