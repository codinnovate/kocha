# This code snippet demonstrates how to read a text file and count the number of occurrences of each word.

# Function to count word occurrences in a file
def count_words_in_file(filename):
    try:
        # Open the file in read mode
        with open(filename, 'r') as file:
            # Read the entire file content
            text = file.read()
            
        # Split the text into words (assuming words are separated by whitespace)
        words = text.split()
        
        # Dictionary to store word counts
        word_count = {}
        
        # Count each word's occurrences
        for word in words:
            word = word.lower()  # Convert to lowercase for case insensitivity
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1

        return word_count
    except FileNotFoundError:
        return "File not found. Please check the file path."

# Example usage
filename = 'sample.txt'  # Make sure this file exists in the same directory
word_counts = count_words_in_file(filename)
print(word_counts)
```