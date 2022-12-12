import { Book } from "./Book";

export const SearchBooksResults = ({ searchedBooks, books, setBooks }) => {
  return (
    <div className="search-books-results">
      <div className="bookshelf-books">
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <Book book={book} books={books} setBooks={setBooks} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};
