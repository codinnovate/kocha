# This code snippet demonstrates how to sort a list of dictionaries by a specific key.

# Sample data: a list of dictionaries representing people with a name and age.
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
]

# Sort the list of dictionaries by the 'age' key in ascending order.
sorted_people = sorted(people, key=lambda person: person['age'])

# Print the sorted list of dictionaries.
print(sorted_people)