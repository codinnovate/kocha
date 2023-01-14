# This code snippet demonstrates how to read a CSV file and sort its rows by a specific column using Python's built-in libraries.

import csv

# Open the CSV file in read mode
with open('example.csv', mode='r') as file:
    # Create a CSV reader object to iterate over lines
    csv_reader = csv.reader(file)
    
    # Read the header (first row) from the CSV file
    header = next(csv_reader)
    
    # Sort the remaining rows by the second column (index 1)
    sorted_rows = sorted(csv_reader, key=lambda row: row[1])
    
    # Print sorted rows
    print(header)
    for row in sorted_rows:
        print(row)
```