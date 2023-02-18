// This TypeScript snippet demonstrates how to sort an array of objects by a specific property.
interface Student {
  name: string;
  age: number;
}

// An array of students to be sorted by age.
const students: Student[] = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 23 },
];

// Sorting the students array in ascending order based on the 'age' property.
students.sort((a, b) => a.age - b.age);

// Logging the sorted array to the console.
console.log(students);
// Output: [ { name: 'Bob', age: 19 }, { name: 'Alice', age: 22 }, { name: 'Charlie', age: 23 } ]