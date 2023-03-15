# This Python code snippet demonstrates how to read a file and count the frequency of each word in it.

from collections import Counter

def count_words_in_file(filename):
    # Open the file and read its content
    with open(filename, 'r', encoding='utf-8') as file:
        text = file.read().lower()  # Read file and convert to lowercase for uniformity
    
    # Split the text into words (simple split by whitespace, can be improved for punctuation)
    words = text.split()
    
    # Use Counter to count the frequency of each word
    word_count = Counter(words)
    
    # Print each word and its count
    for word, count in word_count.items():
        print(f"{word}: {count}")

# Example usage: count_words_in_file('example.txt')