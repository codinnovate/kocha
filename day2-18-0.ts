// TypeScript code to filter and sort an array of user objects by age

// Define the User interface
interface User {
  name: string;
  age: number;
}

// Sample array of users
const users: User[] = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 19 },
];

// Function to filter and sort users above a certain age
function filterAndSortUsers(users: User[], minAge: number): User[] {
  // Filter users who are above the minimum age
  const filteredUsers = users.filter(user => user.age > minAge);
  
  // Sort the filtered users by age in ascending order
  return filteredUsers.sort((a, b) => a.age - b.age);
}

// Call the function with a minimum age of 20
const result = filterAndSortUsers(users, 20);

// Print the sorted and filtered users
console.log(result);