// This code snippet demonstrates how to filter and sort a list of objects in TypeScript

// Define a type for the object structure
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

// Sample array of products
const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Smartphone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

// Function to filter products that are in stock and sort them by price
function filterAndSortProducts(products: Product[]): Product[] {
  return products
    .filter(product => product.inStock) // Filter products that are in stock
    .sort((a, b) => a.price - b.price); // Sort products by price in ascending order
}

// Call the function and log the result
const availableProducts = filterAndSortProducts(products);
console.log(availableProducts);