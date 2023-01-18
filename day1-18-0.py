# This script reads a file named 'data.txt', counts the occurrences of each word, and prints the top 5 most common words.

from collections import Counter

def count_words(filename):
    with open(filename, 'r') as file:
        text = file.read().lower()  # Read the file and convert text to lowercase for uniformity
        words = text.split()  # Split the text into words
        word_count = Counter(words)  # Count occurrences of each word
        most_common = word_count.most_common(5)  # Get the top 5 most common words
        return most_common

# Replace 'data.txt' with the path to your file
top_words = count_words('data.txt')
print("Top 5 most common words:", top_words)