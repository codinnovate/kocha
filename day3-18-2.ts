// This TypeScript snippet demonstrates how to filter and sort an array of objects by a specific property.

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

// Sample array of products
const products: Product[] = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 600, inStock: true },
  { name: "Monitor", price: 300, inStock: false }
];

// Filter products that are in stock
const inStockProducts = products.filter(product => product.inStock);

// Sort the in-stock products by price in ascending order
const sortedInStockProducts = inStockProducts.sort((a, b) => a.price - b.price);

console.log("Sorted In-Stock Products:", sortedInStockProducts);