// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.
// The example sorts an array of users by their age in ascending order.

interface User {
  name: string;
  age: number;
}

// Sample array of users
const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 }
];

// Function to sort users by age
function sortUsersByAge(users: User[]): User[] {
  return users.sort((a, b) => a.age - b.age);
}

// Perform the sorting
const sortedUsers = sortUsersByAge(users);

// Log the sorted array to the console
console.log(sortedUsers);
// Output: 
// [ { name: 'David', age: 20 },
//   { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 } ]