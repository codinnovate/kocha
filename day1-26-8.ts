// This TypeScript code snippet demonstrates how to sort an array of objects
// by a specific property. In this example, we sort an array of users by age.

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// Sort the array of users by age in ascending order
const sortedUsers = users.sort((a, b) => a.age - b.age);

// Log the sorted array to the console
console.log(sortedUsers);
// Output: [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]