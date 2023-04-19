import heapq

def solution(scoville, K):
    cnt = 0
    heapq.heapify(scoville)
    
    while(scoville):
        smallest = heapq.heappop(scoville)
        if smallest>=K:
            heapq.heappush(scoville, smallest)
            break
        else:
            if scoville:
                smaller = heapq.heappop(scoville)
                heapq.heappush(scoville, smallest + (smaller*2))
                cnt+=1
            else:
                break
    if not scoville:
        return -1
    else:
        return cnt