# This code snippet demonstrates how to sort a list of dictionaries by a specific key.
# Useful when you have data records and need to order them based on a particular attribute.

# Sample list of dictionaries representing people with names and ages
people = [
    {"name": "Alice", "age": 34},
    {"name": "Bob", "age": 23},
    {"name": "Charlie", "age": 45},
    {"name": "David", "age": 29}
]

# Sort the list of people by the 'age' key
sorted_people = sorted(people, key=lambda person: person['age'])

# Print the sorted list
print("Sorted list by age:")
for person in sorted_people:
    print(f"{person['name']} is {person['age']} years old.")