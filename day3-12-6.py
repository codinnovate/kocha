# This code snippet demonstrates how to read a text file line by line and print each line in uppercase.

# Open the file in read mode
with open('example.txt', 'r') as file:
    # Iterate over each line in the file
    for line in file:
        # Print the line in uppercase
        print(line.upper().strip())  # .strip() removes any trailing newline characters
```