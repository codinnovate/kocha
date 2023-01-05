# This Python code snippet demonstrates how to read a file and count the occurrences of each word.

# Open the file in read mode
with open('example.txt', 'r') as file:
    text = file.read().lower()  # Read the file content and convert it to lowercase

# Split the text into words
words = text.split()

# Initialize an empty dictionary to store the word counts
word_count = {}

# Iterate over each word in the list
for word in words:
    # If the word is already in the dictionary, increment its count
    if word in word_count:
        word_count[word] += 1
    else:
        # Otherwise, add the word to the dictionary with a count of 1
        word_count[word] = 1

# Print the word count dictionary
print(word_count)
```