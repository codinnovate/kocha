// This TypeScript code snippet demonstrates how to filter and sort an array of objects.
// The use-case is to find all active users and sort them by their age.

interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { name: "Alice", age: 30, isActive: true },
  { name: "Bob", age: 24, isActive: false },
  { name: "Charlie", age: 28, isActive: true },
  { name: "David", age: 35, isActive: false },
  { name: "Eve", age: 22, isActive: true },
];

// 1. Filter users to get only those who are active
const activeUsers = users.filter(user => user.isActive);

// 2. Sort the active users by age in ascending order
const sortedActiveUsers = activeUsers.sort((a, b) => a.age - b.age);

console.log(sortedActiveUsers);
// Output: [
//   { name: "Eve", age: 22, isActive: true },
//   { name: "Charlie", age: 28, isActive: true },
//   { name: "Alice", age: 30, isActive: true }
// ]