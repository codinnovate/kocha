# This code snippet demonstrates how to sort a list of dictionaries by a specific key.
# Each dictionary represents a person with 'name' and 'age', and we sort by 'age'.

people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]

# Sort the list of dictionaries using the 'age' key
sorted_people = sorted(people, key=lambda person: person['age'])

# Output the sorted list to verify the result
for person in sorted_people:
    print(f"{person['name']} is {person['age']} years old.")