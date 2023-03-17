# This code snippet reads a text file and counts the frequency of each word.

def count_words_in_file(filename):
    word_count = {}

    # Open the file in read mode and iterate over each line
    with open(filename, 'r') as file:
        for line in file:
            words = line.split()  # Split the line into words
            for word in words:
                word = word.lower().strip('.,!?"\'')  # Normalize the word
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1

    return word_count

# Example usage
filename = 'example.txt'
word_frequencies = count_words_in_file(filename)
print(word_frequencies)  # Outputs the frequency of each word in the file