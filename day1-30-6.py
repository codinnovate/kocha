# This code snippet demonstrates how to read a text file and count the frequency of each word.

# Open the file in read mode
with open('sample.txt', 'r') as file:
    # Read the content of the file
    text = file.read()

# Remove punctuation and convert text to lowercase
import string
text = text.translate(str.maketrans('', '', string.punctuation)).lower()

# Split the text into words
words = text.split()

# Count the frequency of each word using a dictionary
word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Print the word frequency count
for word, count in word_count.items():
    print(f"{word}: {count}")