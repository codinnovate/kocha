// This TypeScript code snippet demonstrates how to filter and sort an array of objects
// based on a specific property. It focuses on sorting a list of students by their grades.

interface Student {
    name: string;
    grade: number;
}

// Sample array of students
const students: Student[] = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 88 },
    { name: "Eve", grade: 91 },
];

// Function to filter students with grades above a certain threshold and sort them
function filterAndSortStudents(students: Student[], minGrade: number): Student[] {
    return students
        .filter(student => student.grade >= minGrade) // Filter students with grades >= minGrade
        .sort((a, b) => b.grade - a.grade); // Sort students by grade in descending order
}

// Using the function to get students with grade >= 80 and sorted by highest grade
const filteredAndSortedStudents = filterAndSortStudents(students, 80);

console.log(filteredAndSortedStudents);
```