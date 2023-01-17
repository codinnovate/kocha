# This code snippet demonstrates how to read a file and count the frequency of each word in it.

def count_word_frequencies(file_path):
    word_count = {}
    try:
        with open(file_path, 'r') as file:
            for line in file:
                # Split each line into words and convert them to lowercase
                words = line.lower().strip().split()
                for word in words:
                    # Increment the word count for each occurrence
                    word_count[word] = word_count.get(word, 0) + 1
    except FileNotFoundError:
        print(f"The file {file_path} was not found.")
    return word_count

# Example usage: count the frequency of words in 'example.txt'
file_path = 'example.txt'
word_frequencies = count_word_frequencies(file_path)
print(word_frequencies)