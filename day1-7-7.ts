// This code snippet demonstrates a simple use case of sorting an array of objects by a specific property in TypeScript.

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 }
];

// Sorts the products array by price in ascending order
const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log("Products sorted by price:", sortedProducts);
/*
  Output:
  Products sorted by price: [
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 750 },
    { name: "Laptop", price: 1000 }
  ]
*/