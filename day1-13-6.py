# This code snippet demonstrates how to read a CSV file and sort its contents by a specific column using Python's built-in csv module.

import csv

# Function to read a CSV file and return its contents as a list of dictionaries
def read_csv(file_path):
    with open(file_path, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]
    return data

# Function to sort data (list of dictionaries) by a specified column
def sort_data(data, column_name):
    return sorted(data, key=lambda x: x[column_name])

# Example usage
csv_file_path = 'example.csv'  # Replace with your CSV file path
data = read_csv(csv_file_path)
sorted_data = sort_data(data, 'age')  # Replace 'age' with the column name you want to sort by

# Output the sorted data
for row in sorted_data:
    print(row)
```