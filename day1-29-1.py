# This code snippet demonstrates how to read a text file and count the occurrence of each word.

# Open the file in read mode
with open('example.txt', 'r') as file:
    # Read the contents of the file
    text = file.read()

# Split the text into words
words = text.split()

# Create a dictionary to store word counts
word_count = {}

# Count the occurrence of each word
for word in words:
    word = word.lower()  # Convert words to lowercase to ensure case insensitivity
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

# Print the word count dictionary
for word, count in word_count.items():
    print(f"'{word}': {count}")