# This script reads a text file and counts the frequency of each word.
# It demonstrates basic file operations and dictionary usage in Python.

def count_word_frequencies(file_path):
    word_counts = {}
    
    with open(file_path, 'r') as file:
        for line in file:
            # Split each line into words
            words = line.strip().split()
            for word in words:
                # Convert word to lowercase to ensure case-insensitivity
                word = word.lower()
                # Update word count in the dictionary
                if word in word_counts:
                    word_counts[word] += 1
                else:
                    word_counts[word] = 1
    
    return word_counts

file_path = 'sample.txt'  # Replace with your text file path
word_frequencies = count_word_frequencies(file_path)
print(word_frequencies)
```