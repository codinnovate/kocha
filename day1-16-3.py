# This code snippet demonstrates how to sort a list of tuples based on the second element of each tuple.

# A list of tuples, each containing a name and a score
students_scores = [('Alice', 88), ('Bob', 75), ('Charlie', 90), ('David', 82)]

# Sort the list based on the second element of each tuple using a lambda function
sorted_students = sorted(students_scores, key=lambda student: student[1])

# Print the sorted list of students
print("Sorted students by score:", sorted_students)