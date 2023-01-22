# This code snippet demonstrates how to read a file and count the occurrences of each word.
from collections import defaultdict

def count_words_in_file(filename):
    word_count = defaultdict(int)  # Create a dictionary with default integer values

    with open(filename, 'r') as file:
        for line in file:
            words = line.split()  # Split each line into words
            for word in words:
                word = word.lower().strip('.,!?')  # Normalize the word by making it lowercase and stripping punctuation
                word_count[word] += 1  # Increment the word count

    return word_count

# Example usage: count words in 'sample.txt' and print the count
filename = 'sample.txt'
word_count = count_words_in_file(filename)
for word, count in word_count.items():
    print(f"'{word}': {count}")