# This code snippet demonstrates how to read a CSV file and compute the average of a specific column.
import csv

def compute_average(filename, column_name):
    with open(filename, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        total, count = 0, 0
        
        # Loop through each row in the CSV, summing the values of the specified column
        for row in reader:
            value = float(row[column_name])
            total += value
            count += 1
        
        return total / count if count else 0

# Example usage: Assuming 'data.csv' has a column named 'price'
average_price = compute_average('data.csv', 'price')
print(f"The average price is: {average_price}")