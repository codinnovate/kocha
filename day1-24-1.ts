// This TypeScript code snippet demonstrates how to filter an array of objects
// based on a specific property, and then sorts the filtered results.

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Smartphone", price: 800, inStock: false },
  { id: 3, name: "Tablet", price: 400, inStock: true },
  { id: 4, name: "Headphones", price: 150, inStock: true },
  { id: 5, name: "Smartwatch", price: 200, inStock: false }
];

// Filter products that are in stock
const inStockProducts = products.filter(product => product.inStock);

// Sort the in-stock products by price in ascending order
const sortedInStockProducts = inStockProducts.sort((a, b) => a.price - b.price);

console.log(sortedInStockProducts);