# This code snippet demonstrates how to read a text file and count the occurrence of each word.

# Open the file in read mode
with open('sample.txt', 'r') as file:
    text = file.read()  # Read the entire content of the file

# Create a dictionary to hold word counts
word_count = {}

# Split the text into words
words = text.split()

# Count the frequency of each word in the text
for word in words:
    word = word.lower()  # Convert to lowercase to ensure case-insensitivity
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Print the word counts
for word, count in word_count.items():
    print(f'{word}: {count}')
```