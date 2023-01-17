// This TypeScript code snippet demonstrates how to sort an array of objects by a specific property.

interface Product {
  name: string;
  price: number;
}

// Sample array of products
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 }
];

// Function to sort products by price in ascending order
function sortProductsByPrice(products: Product[]): Product[] {
  return products.sort((a, b) => a.price - b.price);
}

// Sorted array of products
const sortedProducts = sortProductsByPrice(products);

// Output the sorted products
console.log("Sorted Products by Price:", sortedProducts);