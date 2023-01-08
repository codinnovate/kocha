// This function takes an array of numbers and returns a new array that is sorted in ascending order.
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--; // Reduce n since the last element is already sorted
  } while (swapped); // Repeat the process until the array is sorted

  return arr;
}

const numbers = [5, 3, 8, 4, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [2, 3, 4, 5, 8]