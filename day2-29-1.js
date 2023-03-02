// This function sorts an array of objects by a specified property.
// It demonstrates how to use the Array.prototype.sort() method for custom sorting.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

// Sort the array of objects by the 'age' property in ascending order
people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: 
// [
//   { name: "Bob", age: 22 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]