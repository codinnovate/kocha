// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

// Define an interface to describe the shape of the objects in the array
interface Product {
  name: string;
  price: number;
}

// Create an array of products
const products: Product[] = [
  { name: "Laptop", price: 899 },
  { name: "Smartphone", price: 499 },
  { name: "Tablet", price: 299 },
  { name: "Monitor", price: 199 }
];

// Sort the array of products by the 'price' property in ascending order
const sortedProducts = products.sort((a, b) => a.price - b.price);

// Output the sorted array
console.log(sortedProducts);
/* 
Output:
[
  { name: "Monitor", price: 199 },
  { name: "Tablet", price: 299 },
  { name: "Smartphone", price: 499 },
  { name: "Laptop", price: 899 }
]
*/