// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

interface Person {
  name: string;
  age: number;
}

// Create an array of Person objects
const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Function to sort the array of people by age in ascending order
function sortPeopleByAge(people: Person[]): Person[] {
  return people.sort((a, b) => a.age - b.age);
}

// Call the function and log the sorted array
const sortedPeople = sortPeopleByAge(people);
console.log(sortedPeople);
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]