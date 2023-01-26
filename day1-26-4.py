# This code snippet demonstrates how to read a text file and count the frequency of each word.

def count_word_frequency(file_path):
    # Open the file in read mode
    with open(file_path, 'r') as file:
        text = file.read().lower()  # Read and convert text to lowercase

    # Split the text into words using spaces and newlines as delimiters
    words = text.split()

    # Create a dictionary to store word counts
    word_count = {}

    # Iterate over each word in the list
    for word in words:
        # Increment the word count in the dictionary
        word_count[word] = word_count.get(word, 0) + 1

    return word_count

# Example usage
file_path = 'example.txt'  # Replace with your file path
word_frequency = count_word_frequency(file_path)
print(word_frequency)