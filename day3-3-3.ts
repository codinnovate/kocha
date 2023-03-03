// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

// Define an interface for a Person object
interface Person {
  name: string;
  age: number;
}

// Create an array of Person objects
const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

// Sort the array by the 'age' property in ascending order
const sortedByAge = people.sort((a, b) => a.age - b.age);

// Sort the array by the 'name' property in alphabetical order
const sortedByName = people.sort((a, b) => a.name.localeCompare(b.name));

// Log the sorted arrays to the console
console.log("Sorted by age:", sortedByAge);
console.log("Sorted by name:", sortedByName);