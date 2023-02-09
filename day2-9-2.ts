// A TypeScript function to sort an array of numbers in ascending order using the bubble sort algorithm
function bubbleSort(numbers: number[]): number[] {
  const array = [...numbers]; // Create a copy of the array to avoid modifying the original
  let n = array.length;

  // Outer loop for iterating through the entire array
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap the elements if they are in the wrong order
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array; // Return the sorted array
}

// Example usage of the bubbleSort function
const unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(unsortedNumbers);

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', sortedNumbers);