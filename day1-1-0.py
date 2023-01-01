# This code snippet demonstrates how to read a text file and count the frequency of each word.

from collections import defaultdict

def count_word_frequency(file_path):
    word_count = defaultdict(int)  # Using defaultdict to initialize word counts to 0
    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()
            for word in words:
                word_count[word.lower()] += 1  # Increment count for each word, converting to lowercase for consistency
    
    return dict(word_count)

# Example usage: assuming 'sample.txt' is a text file in the same directory.
file_path = 'sample.txt'
word_frequencies = count_word_frequency(file_path)
print(word_frequencies)