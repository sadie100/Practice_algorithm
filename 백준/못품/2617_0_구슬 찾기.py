'''
두 개의 graph로 무겁고 작은 관계를 지정한다
중첩된 무거움 관계가 있을 때마다 dfs로 모두 넣어 준다

길이가 (n//2)보다 큰(초과) 구슬 수를 구한다
'''

import sys
input = sys.stdin.readline

n,m = map(int, input().split())
heavyGraph = [[] for _ in range(n+1)]
lightGraph = [[] for _ in range(n+1)]

for _ in range(m):
    heavy, light = map(int, input().split())
    heavyStack = [light]
    lightStack = [heavy]
    while(heavyStack):
        popped = heavyStack.pop()
        if popped not in heavyGraph[heavy]:
            heavyGraph[heavy].append(popped)
        if heavy not in lightGraph[popped]:
            lightGraph[popped].append(heavy)
        for next in heavyGraph[popped]:
            if next not in heavyGraph[heavy]:
                heavyStack.append(next)
        while(lightStack):
            lopped = lightStack.pop()
            if lopped not in lightGraph[light]:
                lightGraph[light].append(lopped)
            if light not in heavyGraph[lopped]:
                heavyGraph[popped].append(light)

            for next in lightGraph[lopped]:
                if next not in lightGraph[light]:
                    lightStack.append(next)
      
       


answerSet = set()
standard = (n+1)//2
heavier = [idx for idx, i in enumerate(heavyGraph) if len(i)>=standard]
lighter = [idx for idx, i in enumerate(lightGraph) if len(i)>=standard]

answerSet.update(heavier)
answerSet.update(lighter)

print(len(answerSet))