// This TypeScript code snippet demonstrates how to filter and sort an array of objects
// based on a specific property. It showcases basic array manipulation techniques.

type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

// Sample array of products
const products: Product[] = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Smartphone", price: 699, inStock: false },
  { name: "Tablet", price: 299, inStock: true },
  { name: "Monitor", price: 199, inStock: true },
];

// Filter products that are in stock and sort them by price in ascending order
const availableProducts = products
  .filter(product => product.inStock)
  .sort((a, b) => a.price - b.price);

// Log the sorted array of available products
console.log(availableProducts);
```