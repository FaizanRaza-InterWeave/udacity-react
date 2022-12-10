import { Link } from "react-router-dom";
import { BookShelfRow } from "../components/BookShelfRow";

export const BookShelf = ({ books, setBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelfRow
            books={books}
            rowName="Currently Reading"
            setBooks={setBooks}
          />
          <BookShelfRow
            books={books}
            rowName="Want to Read"
            setBooks={setBooks}
          />
          <BookShelfRow books={books} rowName="Read" setBooks={setBooks} />
        </div>
      </div>
      <Link className="open-search" to="/search-books">
        Search
      </Link>
    </div>
  );
};
