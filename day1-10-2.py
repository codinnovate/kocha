# This code snippet demonstrates how to read a text file and count the occurrence of each word.

from collections import defaultdict

def count_words(file_path):
    word_count = defaultdict(int)  # A dictionary to store word counts
    with open(file_path, 'r') as file:
        for line in file:
            words = line.strip().split()  # Split each line into words
            for word in words:
                word_count[word.lower()] += 1  # Increment the count for each word

    return word_count

# Example usage: Assume 'sample.txt' is a text file in the same directory
file_path = 'sample.txt'
word_counts = count_words(file_path)
print(word_counts)  # Prints a dictionary with words as keys and their counts as values