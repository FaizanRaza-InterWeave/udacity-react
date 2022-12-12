export const Book = ({
  book,
  bookshelfBooks,
  setBooks,
  updateBookToBookShelf,
}) => {
  // Ensure those without a shelf value default to ""
  const shelf = book.shelf ? book.shelf : "";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={(event) => {
                updateBookToBookShelf(book, event, bookshelfBooks);
              }}
            >
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((author) => (
            <span key={author}>{author} </span>
          ))}
        </div>
      </div>
    </li>
  );
};
