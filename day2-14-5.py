# This code snippet demonstrates how to sort a list of dictionaries by a specific key.
# It sorts a list of students by their 'age' in ascending order.

students = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 20},
    {"name": "Charlie", "age": 23}
]

# The sorted function takes the list and a lambda function specifying the key to sort by.
sorted_students = sorted(students, key=lambda student: student['age'])

# Output the sorted list of students
for student in sorted_students:
    print(f"Name: {student['name']}, Age: {student['age']}")