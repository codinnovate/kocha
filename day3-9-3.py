# This code snippet demonstrates how to read a text file and count the frequency of each word.

def count_word_frequency(file_path):
    # Opening the file in read mode
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read the file and convert text to lowercase

    word_list = text.split()  # Split text into words
    word_count = {}  # Dictionary to store word frequency

    for word in word_list:
        if word in word_count:
            word_count[word] += 1  # Increment count if word is already in dictionary
        else:
            word_count[word] = 1  # Add word to dictionary with a count of 1

    return word_count

# Example usage: Replace 'yourfile.txt' with your text file path
file_path = 'yourfile.txt'
word_frequencies = count_word_frequency(file_path)
print(word_frequencies)