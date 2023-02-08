# This code snippet demonstrates how to read a CSV file and sort its rows based on a specific column.

import csv

def read_and_sort_csv(file_path, sort_column_index):
    # Open the CSV file and read its contents into a list of dictionaries
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        data = list(csv_reader)

    # Sort the list of dictionaries by the specified column index
    sorted_data = sorted(data, key=lambda row: row[csv_reader.fieldnames[sort_column_index]])

    # Print the sorted data
    for row in sorted_data:
        print(row)

# Example usage: Assuming 'data.csv' has columns 'Name', 'Age', 'City' and you want to sort by 'Age'
read_and_sort_csv('data.csv', 1)