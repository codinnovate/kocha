# This code snippet demonstrates how to read a text file and count the frequency of each word.

# Function to count word frequency in a text file
def count_word_frequency(file_path):
    word_count = {}
    with open(file_path, 'r') as file:
        for line in file:
            # Split each line into words and iterate over them
            words = line.split()
            for word in words:
                word = word.lower().strip(".,!?\"'()[]{}")  # Normalize words
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    return word_count

# Example usage
file_path = 'sample.txt'  # Make sure a text file named 'sample.txt' is in the same directory
word_frequency = count_word_frequency(file_path)
print(word_frequency)
```