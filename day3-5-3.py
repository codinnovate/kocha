# This code snippet reads a text file and counts the occurrences of each word.
# It uses a dictionary to store words as keys and their counts as values.

def count_words_in_file(file_path):
    word_count = {}
    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()
            for word in words:
                word = word.lower().strip('.,!?;:"()[]')  # Normalize the words
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    return word_count

# Example usage
file_path = 'sample.txt'  # Ensure the file exists in the same directory
word_count = count_words_in_file(file_path)
print(word_count)
```