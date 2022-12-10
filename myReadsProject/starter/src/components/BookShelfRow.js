import { Book } from "./Book";

export const BookShelfRow = ({ books, rowName }) => {
  const booksToDisplay = books.filter((book) => book.row === rowName);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{rowName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksToDisplay.map((book) => (
            <Book
              book={{
                title: book.title,
                authors: book.authors,
                coverUrl: book.coverUrl,
              }}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
