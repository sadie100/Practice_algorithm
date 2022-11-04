count = int(input())
words = list(set([input() for i in range(count)]))

words.sort(key=lambda x:(len(x),x))

print("\n".join(words))