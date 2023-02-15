# This code snippet demonstrates how to read a text file and count the frequency of each word.

from collections import Counter

# Function to count words in a file
def count_words_in_file(filename):
    with open(filename, 'r') as file:
        text = file.read()
        words = text.split()
        word_count = Counter(words)
        return word_count

# Example usage
filename = 'sample.txt'
word_count = count_words_in_file(filename)

# Print the word count dictionary
for word, count in word_count.items():
    print(f"'{word}': {count}")
```