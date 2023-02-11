# This code snippet demonstrates how to read a text file and count the occurrences of each word.

from collections import Counter

# Function to read a file and count word occurrences
def count_words_in_file(filename):
    with open(filename, 'r') as file:
        text = file.read().lower()  # Read the file content and convert to lowercase
        words = text.split()  # Split the text into words
        word_count = Counter(words)  # Count occurrences of each word
    return word_count

# Example usage
filename = 'example.txt'  # Replace with your file path
word_count = count_words_in_file(filename)
print(word_count)