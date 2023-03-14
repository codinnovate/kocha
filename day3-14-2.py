# This code snippet demonstrates a simple way to read a text file and count the occurrences of each word.

def count_words_in_file(file_path):
    word_count = {}
    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()
            for word in words:
                word = word.lower().strip('.,!?;:"()')  # Normalize the word by making it lowercase and stripping punctuation
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    return word_count

# Example usage:
# Assuming you have a file named 'sample.txt' in the same directory.
file_path = 'sample.txt'
word_counts = count_words_in_file(file_path)
print(word_counts)