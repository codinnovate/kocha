# This script demonstrates how to read a text file and count the frequency of each word.

from collections import Counter

def count_words_in_file(filename):
    with open(filename, 'r') as file:
        text = file.read().lower()  # Read the file and convert all text to lowercase
        words = text.split()  # Split the text into a list of words
        word_count = Counter(words)  # Use Counter to count the frequency of each word
    return word_count

# Example usage
filename = 'sample.txt'
word_frequencies = count_words_in_file(filename)
print(word_frequencies)