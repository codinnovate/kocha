# This code snippet demonstrates how to read a text file and count the occurrences of each word.

# Open the file in read mode
with open('sample_text.txt', 'r') as file:
    text = file.read()

# Split the text into words
words = text.split()

# Create a dictionary to store word counts
word_count = {}

# Count each word in the text
for word in words:
    word = word.lower().strip(",.!?")  # Normalize words to lowercase and remove punctuation
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Print the word count dictionary
for word, count in word_count.items():
    print(f"'{word}': {count}")
```