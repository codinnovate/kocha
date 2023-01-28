// This code snippet demonstrates how to sort an array of objects by a specific property in TypeScript

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 }
];

// Sort products by price in ascending order
const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log("Sorted Products by Price:");
sortedProducts.forEach(product => console.log(`${product.name}: $${product.price}`));