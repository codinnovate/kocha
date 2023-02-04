# This code snippet demonstrates how to read a CSV file and calculate the average of a specific column using Python's built-in csv module.

import csv

def calculate_average(filename, column_name):
    # Initialize variables to store the sum of the column values and a counter for the number of entries.
    total = 0
    count = 0

    # Open the CSV file for reading.
    with open(filename, mode='r') as file:
        # Use csv.DictReader to parse the CSV file into a dictionary format where each row is a dictionary.
        csv_reader = csv.DictReader(file)
        
        # Iterate over each row in the CSV file.
        for row in csv_reader:
            # Convert the value in the specified column to a float and add it to the total.
            total += float(row[column_name])
            # Increment the entry counter.
            count += 1
    
    # Calculate the average by dividing the total by the number of entries.
    average = total / count
    return average

# Example usage: calculate the average of the 'Price' column in 'data.csv'
filename = 'data.csv'
column_name = 'Price'
average_price = calculate_average(filename, column_name)
print(f"The average {column_name} is: {average_price:.2f}")