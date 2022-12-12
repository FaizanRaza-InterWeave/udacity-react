import { Link } from "react-router-dom";
import { BookShelfRow } from "../components/BookShelfRow";

export const BookShelf = ({
  bookshelfBooks,
  setBooks,
  updateBookToBookShelf,
}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelfRow
            bookshelfBooks={bookshelfBooks}
            rowName="currentlyReading"
            setBooks={setBooks}
            updateBookToBookShelf={updateBookToBookShelf}
          />
          <BookShelfRow
            bookshelfBooks={bookshelfBooks}
            rowName="wantToRead"
            setBooks={setBooks}
            updateBookToBookShelf={updateBookToBookShelf}
          />
          <BookShelfRow
            bookshelfBooks={bookshelfBooks}
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
