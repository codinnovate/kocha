# This code snippet demonstrates how to read a text file and print its contents line by line.

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:  # Open the file in read mode
            for line in file:  # Iterate over each line in the file
                print(line.strip())  # Print the line without any extra newline characters
    except FileNotFoundError:
        print(f"The file at {file_path} was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example use-case: Reading a file named 'example.txt'
read_file('example.txt')