'''
-가 있으면 그 다음 -가 올 때까지 괄호 친다..

결과값을 표기하는 answer를 생성한다
+가 오면 answer에 수 더하기
-가 오면 그 다음 수들은 전부 뺀다
'''

sentence = input()
answer = 0

arr = sentence.split('-')
# - 앞에 있는 수들은 더하고, - 뒤에 나온 수들은 빼기

toPlus = arr[0].split('+')
for num in toPlus:
    answer += int(num)

toMinus = arr[1:]
for str in toMinus:
    for num in str.split('+'):
        answer -= int(num)

print(answer)





# import re

# sentence = input()
# answer = 0

# p = re.compile('\+|\-')
# operators = p.findall(sentence)

# numList = list(map(int, re.split('\+|\-', sentence)))

# answer = numList.pop(0)

# mode = 'plus'
# for i, num in enumerate(numList):
#     if operators[i] == '+':
#         if mode == 'plus':
#             answer += num
#         else:
#             answer -= num
#     if operators[i] == '-':
#         mode = 'minus'
#         answer -= num

# print(answer)