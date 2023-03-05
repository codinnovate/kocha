# This Python code snippet reads a text file, counts the frequency of each word, and prints the results.
from collections import Counter

def count_word_frequencies(filename):
    with open(filename, 'r') as file:
        text = file.read().lower()  # Read the file and convert text to lowercase
        words = text.split()  # Split the text into words
        word_count = Counter(words)  # Count the frequency of each word

    for word, count in word_count.items():
        print(f"'{word}': {count}")

# Example usage: count_word_frequencies('sample.txt')
# Make sure to replace 'sample.txt' with the path to your text file.