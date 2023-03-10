// Function to sort an array of numbers in ascending order using the Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    // Outer loop for each element in the array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr; // Return the sorted array
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", numbers);
let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
```