# This code snippet demonstrates how to sort a list of dictionaries by a specific key.
# It sorts a list of students by their 'grade' in ascending order.

students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 75},
    {"name": "Charlie", "grade": 92},
    {"name": "David", "grade": 85}
]

# Sort the list of dictionaries using the 'sorted' function and a lambda function as the key.
sorted_students = sorted(students, key=lambda student: student["grade"])

# Print the sorted list of students
for student in sorted_students:
    print(f"{student['name']}: {student['grade']}")