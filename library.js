
// Book constructor function
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
  
  // LibraryCatalog constructor function
  function LibraryCatalog() {
    this.books = [];
  }
  
  // Add a book to the catalog
  LibraryCatalog.prototype.addBook = function(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
  };
  
  // Generator function for bookIterator
  LibraryCatalog.prototype.bookIterator = function* () {
    for (const book of this.books) {
      yield book;
    }
  };
  
  // Symbol.iterator function returning bookIterator
  LibraryCatalog.prototype[Symbol.iterator] = function() {
    return this.bookIterator();
  };
  
  // Get books by a specific author
  LibraryCatalog.prototype.getBooksByAuthor = function(authorName) {
    return this.books.filter(book => book.author === authorName);
  };
  
 
  const library = new LibraryCatalog();
  library.addBook('Book 1', 'Author A', 'Fantasy');
  library.addBook('Book 2', 'Author B', 'Mystery');
  library.addBook('Book 3', 'Author A', 'Science Fiction');
  
  // Iterate over books using for...of loop
  console.log('All books in the catalog:',library);
  for (const book of library) {
    console.log(book.title, 'by', book.author);
  }
  
  // Get books by a specific author
  const authorName = 'Author A';
  const booksByAuthor = library.getBooksByAuthor(authorName);
  console.log(`Books by ${authorName}:`, booksByAuthor);
  