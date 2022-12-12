export const Book = ({ book, books, setBooks }) => {
  console.log({ books });

  function modifyObjectInArray(arr, key, book, keyToChange, newValue) {
    // Find the object in the array that has the specified key and value
    // let obj = arr.find((obj) => obj[key] === value);
    // filter out the book
    let updatedBooks = arr.filter(({ title }) => title !== book.title);
    console.log({ updatedBooks });

    // If the object was found, update the value of the specified key
    book[keyToChange] = newValue;

    // if the new row is not "none" then add it back to original books

    updatedBooks = updatedBooks.concat(book);

    // Return the modified array
    return updatedBooks;
  }

  function modifyObjectInArrayOld(arr, key, value, keyToChange, newValue) {
    // Find the object in the array that has the specified key and value
    let obj = arr.find((obj) => obj[key] === value);

    // If the object was found, update the value of the specified key
    if (obj) {
      obj[keyToChange] = newValue;
    }

    // Return the modified array
    return arr;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.coverUrl}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.row}
              onChange={(event) => {
                event.preventDefault();
                const newBooks = modifyObjectInArray(
                  books,
                  "title",
                  book,
                  "row",
                  event.target.value
                );

                const newBooksOldMethod = modifyObjectInArrayOld(
                  books,
                  "title",
                  book.title,
                  "row",
                  event.target.value
                );

                console.log({ newBooks });
                console.log({ newBooksOldMethod });

                setBooks(newBooks);
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};
