# This code snippet demonstrates how to sort a list of dictionaries by a specific key using Python's built-in sorted() function.

# Sample list of dictionaries representing a group of people with their names and ages
people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]

# Sort the list of dictionaries by the 'age' key
sorted_people = sorted(people, key=lambda person: person['age'])

# Print the sorted list
print("Sorted list of people by age:")
for person in sorted_people:
    print(f"Name: {person['name']}, Age: {person['age']}")