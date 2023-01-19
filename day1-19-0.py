# This code snippet demonstrates how to sort a list of dictionaries by a specific key.

# Sample data: a list of dictionaries representing people with 'name' and 'age' keys.
people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]

# Sort the list of dictionaries by the 'age' key in ascending order.
# The 'sorted' function takes a key parameter, which is a function that returns
# the value to sort by. Here, we use a lambda function to extract the 'age' value.
sorted_people = sorted(people, key=lambda person: person['age'])

# Print the sorted list of dictionaries.
print(sorted_people)