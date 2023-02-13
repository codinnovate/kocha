// This code snippet demonstrates how to sort an array of objects by a specific property using TypeScript.

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// Sort the array of people by age in ascending order.
const sortedByAge = people.sort((a, b) => a.age - b.age);

// Log the sorted array to the console.
console.log(sortedByAge);
// Output: [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]