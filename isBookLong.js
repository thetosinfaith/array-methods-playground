/*

2. Create a function that receives an array of objects representing books 
(e.g., {title: "Harry Potter", pages: 400}) and returns a new array with 
titles and whether the book is considered long (pages > 300).

*/

const books = [
    { title: "Harry Potter", pages: 400 },
    { title: "The Great Gatsby", pages: 250 },
    { title: "Lord of the Rings", pages: 600 }
];

const bookLength = books.map(book => ({
    title: book.title,
    pages: book.pages > 300,

}))

return console.log(bookLength);