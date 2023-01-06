// This code snippet demonstrates how to define and use an interface in TypeScript
// to ensure a consistent structure for objects representing a book.

interface Book {
    title: string;
    author: string;
    yearPublished: number;
    isAvailable: boolean;
}

// Function to display book information
function displayBookInfo(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year Published: ${book.yearPublished}`);
    console.log(`Is Available: ${book.isAvailable ? "Yes" : "No"}`);
}

// Example usage of the Book interface
const myBook: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    isAvailable: true
};

// Display information about the book using the function
displayBookInfo(myBook);