// This TypeScript code snippet demonstrates how to filter and sort an array of objects

type Product = {
    name: string;
    price: number;
};

// Sample array of Product objects
const products: Product[] = [
    { name: "Laptop", price: 999 },
    { name: "Smartphone", price: 599 },
    { name: "Tablet", price: 399 },
    { name: "Monitor", price: 199 },
];

// Function to filter products with price greater than a specified value
function filterProductsByPrice(products: Product[], minPrice: number): Product[] {
    return products.filter(product => product.price > minPrice);
}

// Function to sort products by price in ascending order
function sortProductsByPrice(products: Product[]): Product[] {
    return products.sort((a, b) => a.price - b.price);
}

// Filter products with price greater than 300
const filteredProducts = filterProductsByPrice(products, 300);

// Sort the filtered products by price
const sortedProducts = sortProductsByPrice(filteredProducts);

console.log("Filtered and Sorted Products:", sortedProducts);