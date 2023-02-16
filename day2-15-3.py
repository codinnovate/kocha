# This code snippet demonstrates how to read a file and count the occurrences of each word.
# It is useful for simple text analysis tasks such as finding the most common words in a document.

from collections import Counter

def count_words_in_file(file_path):
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read and convert the text to lowercase
        words = text.split()  # Split the text into words
        word_count = Counter(words)  # Count the occurrences of each word

    return word_count

# Example usage:
# word_counts = count_words_in_file('example.txt')
# print(word_counts)
```