# This code snippet demonstrates how to read a CSV file and print its contents using the csv module.

import csv

# Specify the path to your CSV file
file_path = 'example.csv'

# Open the CSV file using the 'with' statement to ensure proper resource management
with open(file_path, mode='r', newline='') as csvfile:
    # Create a reader object to parse the CSV file
    csv_reader = csv.reader(csvfile)
    
    # Iterate over each row in the CSV file
    for row in csv_reader:
        # Print the contents of each row
        print(row)