# This code snippet demonstrates how to sort a list of tuples by the second element of each tuple.

# Define a list of tuples where each tuple contains a name and a score
data = [("Alice", 88), ("Bob", 95), ("Charlie", 85), ("David", 92)]

# Sort the list of tuples based on the second element (the score) in descending order
sorted_data = sorted(data, key=lambda x: x[1], reverse=True)

# Print the sorted list
print("Sorted data by score (highest to lowest):")
for name, score in sorted_data:
    print(f"{name}: {score}")