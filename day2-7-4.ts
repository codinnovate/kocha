// This TypeScript code snippet demonstrates how to filter and sort an array of objects.
// The use-case here is managing a list of users by filtering out inactive ones and sorting them by age.

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

// Sample data: list of users
const users: User[] = [
    { name: "Alice", age: 30, isActive: true },
    { name: "Bob", age: 24, isActive: false },
    { name: "Charlie", age: 29, isActive: true },
    { name: "David", age: 35, isActive: false },
];

// Step 1: Filter users to include only active ones
const activeUsers = users.filter(user => user.isActive);

// Step 2: Sort active users by age in ascending order
const sortedActiveUsers = activeUsers.sort((a, b) => a.age - b.age);

console.log(sortedActiveUsers);
// Output: [ { name: 'Charlie', age: 29, isActive: true }, { name: 'Alice', age: 30, isActive: true } ]