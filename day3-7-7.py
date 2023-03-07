# This code snippet demonstrates how to read a text file and count the frequency of each word.

def count_word_frequency(file_path):
    try:
        with open(file_path, 'r') as file:
            text = file.read().lower()  # Read the file and convert text to lowercase
            words = text.split()  # Split the text into words
            word_count = {}

            for word in words:
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1

            return word_count
    except FileNotFoundError:
        return "File not found. Please check the file path."

# Example usage: Assuming 'sample.txt' is a text file in the same directory
word_frequencies = count_word_frequency('sample.txt')
print(word_frequencies)
```