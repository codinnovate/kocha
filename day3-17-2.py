# This code snippet reads a text file and counts the frequency of each word.
# It demonstrates file handling, string manipulation, and usage of a dictionary for counting.

def count_word_frequencies(filename):
    word_count = {}
    with open(filename, 'r') as file:
        for line in file:
            words = line.strip().lower().split()  # Split line into words after converting to lowercase
            for word in words:
                word = word.strip('.,!?()[]')  # Remove common punctuation
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
    return word_count

# Example usage:
filename = 'sample.txt'  # Ensure this file exists in the same directory
frequencies = count_word_frequencies(filename)
for word, count in frequencies.items():
    print(f"'{word}': {count}")