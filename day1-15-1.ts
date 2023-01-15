// This TypeScript code snippet sorts an array of objects by a specific property

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 32 }
];

// Sorts the array of 'Person' objects by the 'age' property in ascending order
const sortedByAge = people.sort((a, b) => a.age - b.age);

console.log(sortedByAge);
// Output: [ { name: 'Bob', age: 22 }, { name: 'Alice', age: 28 }, { name: 'Charlie', age: 32 } ]