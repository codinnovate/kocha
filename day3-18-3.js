// A simple JavaScript function to filter an array of numbers for values greater than a specified threshold
function filterGreaterThan(numbers, threshold) {
  // The .filter() method creates a new array with all elements that pass the test implemented by the provided function
  return numbers.filter(number => number > threshold);
}

// Example usage:
const numbersArray = [1, 5, 8, 12, 20, 3];
const thresholdValue = 10;
const filteredArray = filterGreaterThan(numbersArray, thresholdValue);

console.log(filteredArray); // Output: [12, 20]