import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { useState } from "react";

export const SearchBooks = ({ books, setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const booksToDisplay = books.filter((book) =>
    book.title.includes(searchTerm)
  );
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"></Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div className="bookshelf-books">
          <ol className="books-grid"></ol>
          {booksToDisplay.map((book) => (
            <Book book={book} books={books} setBooks={setBooks} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
