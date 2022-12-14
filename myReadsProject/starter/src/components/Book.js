export const Book = ({ book, bookshelfBooks, updateBookToBookShelf }) => {
  console.log({ book });
  console.log({ book: book.title, shelf: book.shelf });
  let shelf;

  // When called with book object from the search API, book.shelf is undefined.
  // So look up the shelf from the state
  if (!book.shelf) {
    const shelfOnBookshelf = bookshelfBooks.filter(
      (bookOnBookShelf) => bookOnBookShelf.title === book.title
    );

    if (shelfOnBookshelf.length === 1) {
      shelf = shelfOnBookshelf[0].shelf;
    } else {
      shelf = "";
    }
  } else {
    shelf = book.shelf;
  }

  // Display errors where info is missing from API call
  let title = "";
  try {
    title = book.title ? book.title : "Error Loading Title";
  } catch (e) {
    title = "Error Loading Title";
  }

  let authors = "";
  try {
    authors = book.authors ? book.authors : ["Error Loading Authors"];
  } catch (e) {
    authors = ["Error Loading Authors"];
  }

  let thumbnail = "";
  try {
    thumbnail = book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "";
  } catch (e) {}

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail}")`,
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
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map((author) => (
            <span key={author}>{author} </span>
          ))}
        </div>
      </div>
    </li>
  );
};
