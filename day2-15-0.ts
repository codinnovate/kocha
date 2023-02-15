// This TypeScript code snippet demonstrates how to perform a simple sort operation on an array of objects by a specific property.

interface Product {
  name: string;
  price: number;
}

// Define an array of products
const products: Product[] = [
  { name: "Laptop", price: 999 },
  { name: "Smartphone", price: 699 },
  { name: "Tablet", price: 399 },
];

// Function to sort products by price in ascending order
function sortProductsByPrice(products: Product[]): Product[] {
  return products.sort((a, b) => a.price - b.price);
}

// Sort the products and store the result
const sortedProducts = sortProductsByPrice(products);

// Log the sorted array to the console
console.log("Products sorted by price:", sortedProducts);