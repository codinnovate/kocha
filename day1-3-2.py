# This code snippet demonstrates how to read a text file and count the frequency of each word.

# Open the file in read mode
with open('example.txt', 'r') as file:
    text = file.read()

# Split the text into words and convert to lowercase for uniformity
words = text.lower().split()

# Create a dictionary to store the frequency of each word
word_count = {}

# Iterate through each word in the list
for word in words:
    # Increment the word count if the word is already in the dictionary
    if word in word_count:
        word_count[word] += 1
    # Add the word to the dictionary if it's not already there
    else:
        word_count[word] = 1

# Print the word frequency count
for word, count in word_count.items():
    print(f'{word}: {count}')
```