# This code snippet reads a text file and counts the frequency of each word.
from collections import Counter

def count_word_frequencies(file_path):
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read the file and convert text to lowercase
    words = text.split()  # Split the text into words
    word_frequencies = Counter(words)  # Count the frequency of each word
    return word_frequencies

# Example usage: assumes there's a file named 'example.txt' in the same directory
file_path = 'example.txt'
frequencies = count_word_frequencies(file_path)
print(frequencies)  # Display the word frequencies