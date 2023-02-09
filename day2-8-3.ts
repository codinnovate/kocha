// A simple TypeScript function to sort an array of objects by a specific property
type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

// This function takes an array of Person objects and sorts them by age in ascending order
function sortPeopleByAge(personArray: Person[]): Person[] {
  return personArray.sort((a, b) => a.age - b.age);
}

const sortedPeople = sortPeopleByAge(people);
console.log(sortedPeople);
// Output: 
// [ { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 } ]