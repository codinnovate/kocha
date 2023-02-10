// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.
// In this example, we have an array of users and we will sort them by their age in ascending order.

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

// The sort method is used to sort the array in place. We provide a compare function
// that defines the sort order based on the 'age' property.
users.sort((a, b) => a.age - b.age);

console.log(users);
// Output: [ { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 } ]