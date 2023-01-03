// This code snippet demonstrates how to sort an array of objects by a specific property in TypeScript.

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Keyboard", price: 50 },
  { id: 3, name: "Monitor", price: 300 },
  { id: 4, name: "Mouse", price: 25 }
];

// Sort the products array by the 'price' property in ascending order.
const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log("Sorted Products by Price:", sortedProducts);