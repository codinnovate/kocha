// This TypeScript code snippet demonstrates a simple way to filter and sort an array of objects.
// Use-case: Filtering and sorting a list of products based on price and availability.

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Smartphone", price: 799, inStock: false },
  { name: "Tablet", price: 499, inStock: true },
  { name: "Headphones", price: 199, inStock: true },
  { name: "Smartwatch", price: 299, inStock: false }
];

// Filter the list to include only products that are in stock.
const availableProducts = products.filter(product => product.inStock);

// Sort the available products by price in ascending order.
const sortedProducts = availableProducts.sort((a, b) => a.price - b.price);

console.log("Available Products (sorted by price):", sortedProducts);
```