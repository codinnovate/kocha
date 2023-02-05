# This code snippet demonstrates how to read a CSV file and sort its data by a specific column using Python's csv and sorted modules.

import csv

# Define the path to the CSV file
file_path = 'sample_data.csv'

# Open the CSV file and read its contents
with open(file_path, mode='r', newline='') as file:
    csv_reader = csv.DictReader(file)
    
    # Sort the rows by the 'age' column in ascending order
    sorted_data = sorted(csv_reader, key=lambda row: int(row['age']))

# Display the sorted data
for row in sorted_data:
    print(row)
```