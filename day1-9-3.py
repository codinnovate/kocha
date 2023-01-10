# This code snippet demonstrates how to read a CSV file and sort the data based on a specific column using Python's built-in csv and sorted modules.

import csv

# Define the CSV file path
csv_file_path = 'example.csv'

# Read the CSV file and store the data in a list of dictionaries
with open(csv_file_path, mode='r', newline='') as file:
    csv_reader = csv.DictReader(file)
    data = list(csv_reader)

# Sort the data by a specific column, e.g., 'age'
sorted_data = sorted(data, key=lambda x: int(x['age']))

# Print the sorted data
for row in sorted_data:
    print(row)
```