# This code snippet demonstrates how to read a text file and count the occurrences of each word.

def count_words_in_file(filename):
    word_count = {}
    
    # Open the file and read its content line by line
    with open(filename, 'r') as file:
        for line in file:
            # Split each line into words and remove surrounding whitespace
            words = line.strip().split()
            for word in words:
                # Convert each word to lowercase to ensure case-insensitive counting
                word = word.lower()
                # Increment the word count for each occurrence
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    
    return word_count

# Example usage: count words in a file named 'example.txt'
filename = 'example.txt'
word_counts = count_words_in_file(filename)
print(word_counts)
```