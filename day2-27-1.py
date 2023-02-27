# This code snippet demonstrates how to read a text file and count the frequency of each word in it.

from collections import Counter

def count_word_frequency(file_path):
    # Open the file in read mode
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read the entire file and convert text to lowercase

    # Split the text into words
    words = text.split()

    # Count the frequency of each word
    word_count = Counter(words)
    
    return word_count

# Example usage
file_path = 'example.txt'  # Replace with your file path
word_frequency = count_word_frequency(file_path)
print(word_frequency)
```