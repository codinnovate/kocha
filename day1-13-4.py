# This code snippet reads a text file and counts the frequency of each word.
# It demonstrates basic file operations and dictionary usage in Python.

# Open the text file in read mode
with open('sample.txt', 'r') as file:
    text = file.read()

# Convert text to lower case and split into words
words = text.lower().split()

# Initialize an empty dictionary to store word counts
word_count = {}

# Iterate through each word in the list
for word in words:
    # If the word is already in the dictionary, increment its count
    if word in word_count:
        word_count[word] += 1
    else:
        # Otherwise, add the word to the dictionary with count 1
        word_count[word] = 1

# Print each word and its corresponding count
for word, count in word_count.items():
    print(f'{word}: {count}')