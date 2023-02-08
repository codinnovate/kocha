// TypeScript code snippet to sort an array of objects by a specific property

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Laptop", price: 1300 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
];

// Sort the array of products by price in ascending order
const sortedProducts = products.sort((a, b) => a.price - b.price);

// Log the sorted array to the console
console.log(sortedProducts);

/*
Output:
[
  { name: "Tablet", price: 500 },
  { name: "Phone", price: 800 },
  { name: "Laptop", price: 1300 }
]
*/