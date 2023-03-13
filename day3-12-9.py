# This code snippet demonstrates how to read a text file and count the occurrences of each word.

def count_words_in_file(file_path):
    word_count = {}
    
    with open(file_path, 'r') as file:
        for line in file:
            words = line.split()  # Split each line into words
            for word in words:
                word = word.lower().strip('.,!?;"()')  # Normalize words
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    
    return word_count

# Example usage: count words in 'sample.txt'
file_path = 'sample.txt'
word_frequencies = count_words_in_file(file_path)
print(word_frequencies)  # Prints a dictionary with words and their counts