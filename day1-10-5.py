# This code snippet demonstrates how to sort a list of dictionaries by a specific key.
# Useful for cases where you need to organize data with multiple attributes.

# List of dictionaries representing students with their names and grades
students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 85},
]

# Sort the list of students by their 'grade' in descending order
sorted_students = sorted(students, key=lambda student: student["grade"], reverse=True)

# Print the sorted list of students
for student in sorted_students:
    print(f"{student['name']} - Grade: {student['grade']}")