word = input()
alphabet_list = [chr(ord('a') + i) for i in range(26)]

print(" ".join([str(word.count(alpha)) for alpha in alphabet_list]))