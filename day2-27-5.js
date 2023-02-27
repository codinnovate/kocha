// Function to sort an array of numbers in ascending order using the Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    // Outer loop iterates over each element in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        // Inner loop compares each pair of adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }
    return arr;
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', numbers);
console.log('Sorted array:', bubbleSort(numbers));
```