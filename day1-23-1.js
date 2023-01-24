// This function sorts an array of numbers in ascending order using the Bubble Sort algorithm.
function bubbleSort(arr) {
  let n = arr.length;
  // Outer loop for each element in the array
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the current element is greater than the next
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Sorted array:', bubbleSort(numbers)); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]