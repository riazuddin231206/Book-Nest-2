let bookTitle = "Dune"; // String
let bookPrice = 499;    // Number
let isAvailable = true; // Boolean
let discountRate;       // Undefined
let selectedGenre = null; // Null

console.log(typeof bookTitle);     // string
console.log(typeof bookPrice);     // number
console.log(typeof isAvailable);   // boolean
console.log(typeof discountRate);  // undefined
console.log(typeof selectedGenre); // object (JS quirk)

// Operators & checkPrice function
function checkPrice(price) {
    if (price < 300) {
        return "cheap";
    } else if (price >= 300 && price <= 500) {
        return "fair";
    } else {
        return "expensive";
    }
}
// Test Cases for checkPrice:
console.log(checkPrice(200)); // Expected: "cheap"
console.log(checkPrice(450)); // Expected: "fair"
console.log(checkPrice(700)); // Expected: "expensive"


// 2. Functions & Arrays 

function createBookList(...titles) {
    return titles;
}


function addBook(arr, title) {
    arr.push(title);
    return arr;
}


function getLastBook(arr) {
    return arr[arr.length - 1];
}


function getBookCount(arr) {
    return arr.length;
}



// 3. Strings & Template Literals 

// 5 String Methods demonstration
let sampleStr = "   JavaScript BookNest   ";
console.log(sampleStr.trim());                // "JavaScript BookNest"
console.log(sampleStr.trim().toUpperCase());  // "JAVASCRIPT BOOKNEST"
console.log(sampleStr.trim().toLowerCase());  // "javascript booknest"
console.log(sampleStr.trim().includes("Book")); // true
console.log(sampleStr.trim().slice(0, 10));   // "JavaScript"

function formatBook(title, author, price) {
    return `${title} by ${author} - $${price}`;
}
// Test Cases:
console.log(formatBook("Dune", "Frank Herbert", 499)); 
// Expected: "Dune by Frank Herbert - $499"

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}
// Test Cases:
console.log(truncate("JavaScript Programming", 10)); 
// Expected: "JavaScript..."


// 4. Conditionals & Scope 

function getGenreMessage(genre) {
    switch (genre) {
        case "Sci-Fi":
            return "Explore futuristic worlds and space travel.";
        case "Dystopian":
            return "Dark visions of alternative futures.";
        case "Fantasy":
            return "Magic, mythical creatures, and epic quests.";
        case "Classic":
            return "Timeless literature of historical importance.";
        default:
            return "General category books.";
    }
}
// Test Cases:
console.log(getGenreMessage("Sci-Fi")); // Expected: "Explore futuristic worlds..."
console.log(getGenreMessage("History")); // Expected: "General category books."

function getDiscount(price, isMember) {
    if (isMember) {
        if (price > 400) {
            return price * 0.8; // 20% discount
        } else {
            return price * 0.9; // 10% discount
        }
    } else {
        return price; // No discount
    }
}
// Test Cases:
console.log(getDiscount(500, true));  // Expected: 400
console.log(getDiscount(500, false)); // Expected: 500


// 5. ES6 Syntax 

// Refactored Arrow Functions
const checkPriceArrow = (price) => price < 300 ? "cheap" : price <= 500 ? "fair" : "expensive";
console.log(checkPriceArrow(350)); // Expected: "fair"

const formatBookArrow = (title, author, price) => `${title} by ${author} - $${price}`;
console.log(formatBookArrow("1984", "George Orwell", 299));

const truncateArrow = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
console.log(truncateArrow("Hello World", 5)); // Expected: "Hello..."



// 6. Higher-Order Array Methods 

export const books = [
    { title: "Dune", author: "Frank Herbert", price: 499, genre: "Sci-Fi", rating: 4.8 },
    { title: "1984", author: "George Orwell", price: 299, genre: "Dystopian", rating: 4.7 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", price: 350, genre: "Fantasy", rating: 4.9 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 250, genre: "Classic", rating: 4.8 },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 550, genre: "Non-Fiction", rating: 4.6 }
];

function listAllBooks(arr) {
    arr.forEach(book => console.log(`${book.title} by ${book.author}`));
}
// listAllBooks(books);

function getBookTitles(arr) {
    return arr.map(book => book.title);
}
console.log(getBookTitles(books)); // Expected: ["Dune", "1984", ...]

export function getCheapBooks(arr, maxPrice) {
    return arr.filter(book => book.price < maxPrice);
}
console.log(getCheapBooks(books, 350)); // Expected: Books with price < 350

export function findBookByTitle(arr, title) {
    return arr.find(book => book.title.toLowerCase() === title.toLowerCase());
}
console.log(findBookByTitle(books, "Dune")); // Expected: Dune object


// 7. Destructuring & Spread 

// Object Destructuring
const sampleBook = books[0];
const { title, author, price } = sampleBook;
console.log(`Destructured -> Title: ${title}, Author: ${author}, Price: ${price}`);

// Array Destructuring
const [firstBook, secondBook, ...remainingBooks] = books;
console.log("First Book Title:", firstBook.title);
console.log("Second Book Title:", secondBook.title);
console.log("Remaining Books Count:", remainingBooks.length);

// Spread Operator (Clone & Merge)
const newBook = { title: "Foundation", author: "Isaac Asimov", price: 420, genre: "Sci-Fi", rating: 4.7 };
const updatedBooksArray = [...books, newBook];
console.log("Total books after spread:", updatedBooksArray.length);

const modifiedBook = { ...sampleBook, price: 599 };
console.log("Modified Book Price:", modifiedBook.price);

// Parameter Destructuring
function getBookSummary({ title, author, price }) {
    return `Summary: ${title} written by ${author} costs $${price}.`;
}
console.log(getBookSummary(sampleBook));


// 8. Logic Building - Main Function (Class 3.12) 

export function analyzeBooks(booksArr) {
    // Custom error handling if books is not a non-empty array
    if (!Array.isArray(booksArr) || booksArr.length === 0) {
        throw new Error("Invalid input: books must be a non-empty array.");
    }

    const totalBooks = booksArr.length;
    
    // Total value and average price
    const totalValue = booksArr.reduce((sum, book) => sum + book.price, 0);
    const averagePrice = totalValue / totalBooks;

    // Expensive books (price > 400)
    const expensiveBooks = booksArr.filter(book => book.price > 400);

    // Group titles by genre using reduce
    const titlesByGenre = booksArr.reduce((acc, book) => {
        if (!acc[book.genre]) {
            acc[book.genre] = [];
        }
        acc[book.genre].push(book.title);
        return acc;
    }, {});

    // Top rated book (highest rating)
    const topRated = booksArr.reduce((prev, current) => (current.rating > prev.rating) ? current : prev);

    return {
        totalBooks,
        totalValue,
        averagePrice,
        expensiveBooks,
        titlesByGenre,
        topRated
    };
}

// Test analyzeBooks function
try {
    const analysisResult = analyzeBooks(books);
    console.log("Analysis Result:", analysisResult);
} catch (error) {
    console.error("Error:", error.message);
}