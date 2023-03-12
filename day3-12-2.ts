// This code snippet demonstrates a simple way to sort an array of objects by a specific property using TypeScript.

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Sort the array of people by age in ascending order
const sortedByAge = people.sort((a, b) => a.age - b.age);

console.log("Sorted by age:", sortedByAge);

// Sort the array of people by name in alphabetical order
const sortedByName = people.sort((a, b) => a.name.localeCompare(b.name));

console.log("Sorted by name:", sortedByName);