# This code snippet demonstrates how to read a text file and count the occurrences of each word.
from collections import defaultdict

def count_words_in_file(file_path):
    word_count = defaultdict(int)  # A dictionary to store word frequency

    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()  # Split each line into words
            for word in words:
                word_count[word.lower()] += 1  # Increment the word count (case insensitive)

    return word_count

# Example usage
file_path = 'sample.txt'  # Ensure this file exists in the same directory
word_count = count_words_in_file(file_path)
print(word_count)  # Output the word frequencies in the file