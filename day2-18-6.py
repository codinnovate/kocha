# This script reads a text file and counts the frequency of each word.

# Open the text file in read mode
with open('example.txt', 'r') as file:
    text = file.read()

# Split the text into words and initialize an empty dictionary for word frequency
words = text.split()
word_count = {}

# Count the frequency of each word
for word in words:
    word = word.lower()  # Convert words to lowercase to ensure case-insensitive counting
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Print the word frequencies
for word, count in word_count.items():
    print(f"{word}: {count}")