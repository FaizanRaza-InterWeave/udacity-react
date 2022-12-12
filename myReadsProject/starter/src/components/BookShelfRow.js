import { Book } from "./Book";

export const BookShelfRow = ({
  books,
  rowName,
  setBooks,
  updateBookToBookShelf,
}) => {
  const booksToDisplay = books.filter((book) => book.shelf === rowName);
  const shelfText = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to Read",
    read: "Read",
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfText[rowName]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksToDisplay.map((book) => (
            <Book
              book={book}
              books={books}
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
