# This code snippet demonstrates how to sort a list of dictionaries by a specific key using Python's sorted() function.

# List of dictionaries, each representing a student with a name and a grade
students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 85},
    {"name": "David", "grade": 90}
]

# Sort the students by their grade in ascending order
sorted_students = sorted(students, key=lambda student: student["grade"])

# Print the sorted list of students
for student in sorted_students:
    print(f"Name: {student['name']}, Grade: {student['grade']}")