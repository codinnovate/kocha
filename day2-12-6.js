// This function takes an array of numbers as input and returns a sorted array in ascending order using the bubble sort algorithm.

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  // Loop over the array until no more swaps are needed
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Reduce the range of elements to check, as the last one is already sorted
  } while (swapped);
  return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // Output: [11, 12, 22, 25, 34, 64, 90]