// This TypeScript code snippet demonstrates how to filter an array of objects 
// by a specific property using the Array.prototype.filter method.

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Shirt', category: 'Apparel' },
  { id: 3, name: 'Phone', category: 'Electronics' },
  { id: 4, name: 'Shoes', category: 'Apparel' }
];

// Function to filter products by category
function filterProductsByCategory(products: Product[], category: string): Product[] {
  return products.filter(product => product.category === category);
}

const electronics = filterProductsByCategory(products, 'Electronics');
console.log(electronics); // Logs only products with category 'Electronics'