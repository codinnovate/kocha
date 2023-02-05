// Function to sort an array of numbers in ascending order using the Bubble Sort algorithm
function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    // Loop through the array
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already sorted, so skip them
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));
```