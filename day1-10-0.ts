// A simple TypeScript function to filter and sort an array of objects by a specific property

// Define an interface for a person object
interface Person {
  name: string;
  age: number;
}

// Function to filter and sort an array of Person objects
function filterAndSortPeople(people: Person[], minAge: number): Person[] {
  // Step 1: Filter the array to include only people older than minAge
  const filteredPeople = people.filter(person => person.age > minAge);

  // Step 2: Sort the filtered array by age in ascending order
  const sortedPeople = filteredPeople.sort((a, b) => a.age - b.age);

  return sortedPeople;
}

// Example usage:
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 22 }
];

const result = filterAndSortPeople(people, 21);
console.log(result);
// Output: [ { name: 'David', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 } ]