// This code snippet demonstrates how to sort an array of objects by a specific property in TypeScript.

type Person = {
    name: string;
    age: number;
};

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// Sort the array in ascending order by the 'age' property.
const sortedPeople = people.sort((a, b) => a.age - b.age);

console.log(sortedPeople);
// Output:
// [ { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 } ]