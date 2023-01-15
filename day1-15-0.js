// This function sorts an array of numbers in ascending order using the bubble sort algorithm.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop to traverse through all elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop to perform the actual comparisons and swaps
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop, then the array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));