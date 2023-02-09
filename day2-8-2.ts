// This TypeScript code snippet demonstrates how to create a simple class 
// with a method to add and retrieve items from a collection.

class ItemCollection<T> {
  private items: T[] = [];

  // Adds a new item to the collection
  addItem(item: T): void {
    this.items.push(item);
  }

  // Returns all items in the collection
  getAllItems(): T[] {
    return this.items;
  }
}

// Example usage:
const stringCollection = new ItemCollection<string>();
stringCollection.addItem("TypeScript");
stringCollection.addItem("JavaScript");

console.log(stringCollection.getAllItems()); // Output: [ 'TypeScript', 'JavaScript' ]

const numberCollection = new ItemCollection<number>();
numberCollection.addItem(42);
numberCollection.addItem(7);

console.log(numberCollection.getAllItems()); // Output: [ 42, 7 ]
```