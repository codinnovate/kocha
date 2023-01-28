# This code snippet demonstrates how to read a text file and count the frequency of each word.

def count_word_frequencies(file_path):
    word_count = {}
    
    # Open the file in read mode
    with open(file_path, 'r') as file:
        # Read each line of the file
        for line in file:
            # Split the line into words
            words = line.split()
            # Count each word
            for word in words:
                word = word.lower()  # Convert to lowercase for consistent counting
                if word in word_count:
                    word_count[word] += 1
                else:
                    word_count[word] = 1
                    
    return word_count

# Example usage
file_path = 'example.txt'  # Replace with your file path
frequencies = count_word_frequencies(file_path)
print(frequencies)