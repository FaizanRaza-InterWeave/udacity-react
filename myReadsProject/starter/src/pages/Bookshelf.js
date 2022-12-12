import { Link } from "react-router-dom";
import { BookShelfRow } from "../components/BookShelfRow";

export const BookShelf = ({ books, setBooks, updateBookToBookShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelfRow
            books={books}
            rowName="currentlyReading"
            setBooks={setBooks}
            updateBookToBookShelf={updateBookToBookShelf}
          />
          <BookShelfRow
            books={books}
            rowName="wantToRead"
            setBooks={setBooks}
            updateBookToBookShelf={updateBookToBookShelf}
          />
          <BookShelfRow
            books={books}
            rowName="read"
            setBooks={setBooks}
            updateBookToBookShelf={updateBookToBookShelf}
          />
        </div>
      </div>
      <Link className="open-search" to="/search-books">
        Search
      </Link>
    </div>
  );
};
