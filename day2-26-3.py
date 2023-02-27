# This code snippet demonstrates how to read a text file and sort its lines alphabetically.
# It assumes a file named 'example.txt' exists in the same directory with some text content.

def read_and_sort_file(file_path):
    try:
        with open(file_path, 'r') as file:
            lines = file.readlines()
            sorted_lines = sorted(lines)
            return sorted_lines
    except FileNotFoundError:
        return "The file was not found."

# Path to the file to be read and sorted
file_path = 'example.txt'
sorted_content = read_and_sort_file(file_path)

if isinstance(sorted_content, list):
    print("Sorted lines from the file:")
    for line in sorted_content:
        print(line.strip())
else:
    print(sorted_content)
```