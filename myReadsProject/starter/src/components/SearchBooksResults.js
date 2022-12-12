import { Book } from "./Book";

export const SearchBooksResults = ({
  searchedBooks,
  bookshelfBooks,
  setBooks,
  updateBookToBookShelf,
}) => {
  return (
    <div className="search-books-results">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <Book
              book={book}
              bookshelfBooks={bookshelfBooks}
              setBooks={setBooks}
              key={book.id}
              updateBookToBookShelf={updateBookToBookShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
