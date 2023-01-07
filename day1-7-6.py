# This code snippet reads a text file and counts the frequency of each word in the file.
from collections import defaultdict

def count_word_frequency(filename):
    word_count = defaultdict(int)  # Create a dictionary to store word frequencies
    with open(filename, 'r') as file:
        for line in file:
            words = line.split()
            for word in words:
                word_count[word.lower()] += 1  # Increment the count for each word (case-insensitive)
    return word_count

# Example usage: Replace 'example.txt' with your text file
filename = 'example.txt'
word_frequencies = count_word_frequency(filename)
for word, count in word_frequencies.items():
    print(f"'{word}': {count}")