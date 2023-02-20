# This Python code snippet demonstrates how to read and display content from a text file.

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:  # Open the file in read mode
            content = file.readlines()      # Read all lines into a list
            return content
    except FileNotFoundError:
        return "File not found. Please check the file path."

# Example usage:
file_path = 'example.txt'  # Replace with your file path
lines = read_file(file_path)

if isinstance(lines, list):
    for index, line in enumerate(lines, start=1):
        print(f"Line {index}: {line.strip()}")  # Print each line with its number
else:
    print(lines)  # Prints error message if file is not found