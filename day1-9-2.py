# This code snippet demonstrates how to read a file and count the number of words in it.

def count_words_in_file(filename):
    try:
        # Open the file in read mode and read its contents
        with open(filename, 'r') as file:
            content = file.read()
        # Split the content into words and return the word count
        words = content.split()
        return len(words)
    except FileNotFoundError:
        return "The file was not found."

# Replace 'your_file.txt' with the path to your file
word_count = count_words_in_file('your_file.txt')
print(f"The file contains {word_count} words.")