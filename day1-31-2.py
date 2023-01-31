# This code snippet demonstrates how to read a CSV file and calculate the average of a specific column using Python's built-in libraries.

import csv

def calculate_average(filename, column_name):
    total = 0
    count = 0

    # Open the CSV file for reading
    with open(filename, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        
        for row in reader:
            # Convert the column value to float and add to total
            total += float(row[column_name])
            count += 1
    
    # Calculate and return the average
    return total / count if count > 0 else 0

# Example usage
filename = 'data.csv'  # Ensure this CSV file exists with appropriate data
column_name = 'price'  # Column name to calculate average for
average_price = calculate_average(filename, column_name)
print(f"The average {column_name} is: {average_price}")
```