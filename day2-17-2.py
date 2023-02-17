# This code snippet demonstrates how to read a text file and count the frequency of each word.

def count_words_in_file(file_path):
    word_count = {}
    with open(file_path, 'r') as file:
        for line in file:
            words = line.strip().split()
            for word in words:
                word = word.lower().strip(".,!?;")  # Normalize words by converting to lowercase and stripping punctuation
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    return word_count

# Example usage: assuming 'sample.txt' is a text file in the same directory
file_path = 'sample.txt'
word_frequencies = count_words_in_file(file_path)
print(word_frequencies)