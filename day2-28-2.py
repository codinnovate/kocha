# This Python code snippet demonstrates how to read a file and count the frequency of each word.

def count_word_frequencies(filename):
    with open(filename, 'r') as file:
        text = file.read().lower()  # Read the file content and convert it to lowercase
    words = text.split()  # Split the text into a list of words
    word_count = {}

    # Count the frequency of each word in the list
    for word in words:
        word_count[word] = word_count.get(word, 0) + 1

    return word_count

# Example usage:
# Assuming 'example.txt' is a text file in the same directory
word_frequencies = count_word_frequencies('example.txt')
print(word_frequencies)
```