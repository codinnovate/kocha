// Simple TypeScript code to demonstrate sorting an array of objects by a specific property

interface Student {
  name: string;
  age: number;
  grade: number;
}

// Sample array of students
const students: Student[] = [
  { name: "Alice", age: 23, grade: 88 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 24, grade: 85 },
];

// Function to sort students by grade in descending order
function sortStudentsByGrade(students: Student[]): Student[] {
  return students.sort((a, b) => b.grade - a.grade);
}

// Call the function and log the sorted array
const sortedStudents = sortStudentsByGrade(students);
console.log(sortedStudents);

// Output will be the students array sorted by grade in descending order