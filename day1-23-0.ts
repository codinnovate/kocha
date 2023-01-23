// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

// Define a type for the objects in the array
type Person = {
    name: string;
    age: number;
};

// Create an array of Person objects
const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// Sort the array by the 'age' property in ascending order
const sortedByAge = people.sort((a, b) => a.age - b.age);

// Output the sorted array
console.log(sortedByAge);
```