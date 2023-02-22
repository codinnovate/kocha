// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

interface Person {
  name: string;
  age: number;
}

// Sample array of objects
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Function to sort the array by age property in ascending order
const sortByAge = (array: Person[]): Person[] => {
  return array.sort((a, b) => a.age - b.age);
};

// Sorted array by age
const sortedPeople = sortByAge(people);

console.log(sortedPeople);
// Output: 
// [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]
```