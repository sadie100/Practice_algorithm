import sys

def solution(n, wires):
    answer = sys.maxsize
    connected = [[] for _ in range(n+1)]
    
    for peer1, peer2 in wires:
        connected[peer1].append(peer2)
        connected[peer2].append(peer1)
    
    def count(node, visited, cnt):
        visited[node] = True
        result = 1
        for next in connected[node]:
            if not visited[next]:
                result += count(next, visited, cnt+1)
        return result
    
    for wire1, wire2 in wires:
        connected[wire1].remove(wire2)
        connected[wire2].remove(wire1)
        visited = [False for _ in range(n+1)]
        values = []
        
        for i in range(1,n+1):
            if not visited[i]:
                values.append(count(i, visited, 1))
                
        if len(values)>1:
            answer = min(abs(values[0]-values[1]), answer)
        connected[wire1].append(wire2)
        connected[wire2].append(wire1)
    
    return answer