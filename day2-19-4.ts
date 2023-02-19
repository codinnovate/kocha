// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

// Define an interface to represent the structure of each item in the array.
interface Product {
  id: number;
  name: string;
  price: number;
}

// Create an array of products, each with an id, name, and price.
const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Tablet", price: 299 },
];

// Function to sort products by price in ascending order.
function sortByPriceAscending(products: Product[]): Product[] {
  return products.sort((a, b) => a.price - b.price);
}

// Call the function and store the sorted array.
const sortedProducts = sortByPriceAscending(products);

// Output the sorted array to the console.
console.log("Products sorted by price (ascending):", sortedProducts);
```