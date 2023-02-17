// This code snippet demonstrates how to sort an array of numbers in ascending order.

// Define an array of numbers
let numbers = [34, 7, 23, 32, 5, 62];

// Use the sort method with a compare function to sort numbers in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]
```