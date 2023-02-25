// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted.

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        // Flag to check if any swapping occurred
        let swapped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped, the array is sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", numbers);
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
```