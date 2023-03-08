// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.
// Here, we have an array of 'Person' objects, and we will sort them by their 'age' property.

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Sorting the 'people' array in ascending order by the 'age' property using the Array.sort() method.
people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: 
// [
//   { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]