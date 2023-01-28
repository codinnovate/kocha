# This code snippet demonstrates how to read data from a CSV file and sort it based on a specific column.
import csv

def read_and_sort_csv(file_path, sort_column):
    with open(file_path, mode='r', newline='') as file:
        # Read data from CSV file into a list of dictionaries
        reader = csv.DictReader(file)
        data = list(reader)
    
    # Sort the data by the specified column (key)
    sorted_data = sorted(data, key=lambda row: row[sort_column])

    return sorted_data

# Example usage
file_path = 'example.csv'
sort_column = 'age'
sorted_csv_data = read_and_sort_csv(file_path, sort_column)

# Print sorted data
for row in sorted_csv_data:
    print(row)