// This TypeScript code snippet demonstrates a simple sorting algorithm using the Array.sort() method.
// It sorts an array of user objects based on their age property in ascending order.

interface User {
  name: string;
  age: number;
}

// Sample array of user objects
const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
];

// Sort the users array by age in ascending order
const sortedUsers = users.sort((a, b) => a.age - b.age);

console.log("Sorted Users by Age:");
sortedUsers.forEach(user => console.log(`Name: ${user.name}, Age: ${user.age}`));