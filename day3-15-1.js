// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]