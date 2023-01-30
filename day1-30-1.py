# This code snippet demonstrates how to sort a list of dictionaries by a specific key.

# Define a list of dictionaries, where each dictionary represents a person with a name and age.
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
]

# Sort the list of dictionaries by the 'age' key using the sorted() function and a lambda function as the key.
sorted_people = sorted(people, key=lambda person: person["age"])

# Print the sorted list of dictionaries.
print(sorted_people)
# Output: [{'name': 'Bob', 'age': 25}, {'name': 'Alice', 'age': 30}, {'name': 'Charlie', 'age': 35}]