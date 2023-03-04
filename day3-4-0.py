# This code snippet demonstrates how to read a text file and count the frequency of each word.

from collections import Counter

def count_word_frequencies(file_path):
    # Open the file and read its contents
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Convert text to lowercase for uniformity

    words = text.split()  # Split text into words
    word_frequencies = Counter(words)  # Count the frequency of each word

    return word_frequencies

# Example usage
if __name__ == "__main__":
    file_path = 'example.txt'  # Ensure this file exists with some text in it
    frequencies = count_word_frequencies(file_path)
    for word, count in frequencies.items():
        print(f"{word}: {count}")