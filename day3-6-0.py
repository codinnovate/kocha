# This code snippet reads a text file and counts the occurrence of each word.
# It demonstrates how to read files and use dictionaries for counting in Python.

def count_words_in_file(file_path):
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read the file and convert text to lowercase to ensure case-insensitive counting.
    
    words = text.split()  # Split the text into individual words.
    word_count = {}  # Initialize an empty dictionary to store word counts.

    for word in words:
        if word in word_count:
            word_count[word] += 1  # Increment the count for existing words.
        else:
            word_count[word] = 1  # Add new words to the dictionary with a count of 1.

    return word_count

# Example usage
file_path = 'example.txt'  # Replace with your file path
word_count = count_words_in_file(file_path)
print(word_count)