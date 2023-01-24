// This code snippet demonstrates how to sort an array of objects by a specific property (age) in ascending order.

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 40 }
];

// The array is sorted using the sort() method which takes a comparison function.
// This function compares the 'age' property of two objects at a time.
people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: 
// [
//   { name: "Jane", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Mark", age: 40 }
// ]