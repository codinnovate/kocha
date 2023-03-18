# This code snippet demonstrates how to read a text file and print each line with its line number.
# It's useful for beginners to understand file handling and basic iteration in Python.

def read_and_print_file_with_line_numbers(file_path):
    try:
        with open(file_path, 'r') as file:
            for line_number, line_content in enumerate(file, start=1):
                print(f"{line_number}: {line_content.strip()}")
    except FileNotFoundError:
        print("The file was not found. Please check the file path.")

# Example usage: replace 'example.txt' with your file path
read_and_print_file_with_line_numbers('example.txt')