# This code snippet demonstrates how to sort a list of dictionaries by a specific key, 'age', in ascending order.

# Sample list of dictionaries with 'name' and 'age' keys
people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]

# Sorting the list by 'age' using the sorted() function and a lambda function as the key
sorted_people = sorted(people, key=lambda person: person['age'])

# Display the sorted list of dictionaries
print(sorted_people)