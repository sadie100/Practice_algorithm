'''

못풀었어요

'''

# import heapq
# k, n = map(int, input().split())
# sosu = list(map(int, input().split()))

# combiHeap = []
# fixedList = []
# usingSosu = []

# while(len(fixedList)<n):
#     for num in sosu:
#         # 해당 i의 조합 구하기
#         i = 1
#         while(len(combiHeap)<=n):
#             heapq.heappush(combiHeap, num ** i)
#             i+=1
        
#         newHeap = []
#         for using in usingSosu:
#             heapq.heappush(newHeap, num * using)
        
#         print(newHeap, combiHeap)
#         while(newHeap and combiHeap and newHeap[0]>combiHeap[0]):
#             fixedList.append(heapq.heappop(combiHeap))

#         print(fixedList)
#         usingSosu.append(num)
        
# print(fixedList[n-1])