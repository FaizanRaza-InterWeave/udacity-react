import { Book } from "./Book";

export const BookShelfRow = ({ books, rowName, setBooks }) => {
  const booksToDisplay = books.filter((book) => book.shelf === rowName);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{rowName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksToDisplay.map((book) => (
            <Book book={book} books={books} setBooks={setBooks} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};
