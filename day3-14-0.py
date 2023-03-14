# This Python code snippet demonstrates how to read a text file and count the frequency of each word.

def count_words_in_file(filename):
    # Open the file in read mode and read its contents
    with open(filename, 'r') as file:
        text = file.read()
    
    # Split the text into words using spaces and punctuation as delimiters
    words = text.lower().split()
    
    # Create a dictionary to store word counts
    word_count = {}
    for word in words:
        # Increment the count for each word found
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    
    return word_count

# Example usage
filename = 'sample.txt'  # Make sure this file exists in the same directory
word_frequencies = count_words_in_file(filename)
print(word_frequencies)
```