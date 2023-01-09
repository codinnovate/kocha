# This Python code snippet demonstrates how to read a text file and count the occurrences of each word.

# Open the file 'sample.txt' in read mode and assign it to 'file'
with open('sample.txt', 'r') as file:
    # Read the file's content and split it into words
    words = file.read().lower().split()

# Create an empty dictionary to store the word counts
word_count = {}

# Iterate over each word in the list
for word in words:
    # If the word is already in the dictionary, increment its count
    if word in word_count:
        word_count[word] += 1
    else:
        # If it's a new word, add it with a count of 1
        word_count[word] = 1

# Print the word counts
for word, count in word_count.items():
    print(f"'{word}': {count}")