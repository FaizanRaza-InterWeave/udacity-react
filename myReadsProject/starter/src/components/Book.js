export const Book = ({ book, books, setBooks }) => {
  // function provided by mentor
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

  // Original method, not as good but functionally the same
  function modifyObjectInArrayOld(arr, key, value, keyToChange, newValue) {
    // Find the object in the array that has the specified key and value
    let findObjInArr = arr.find((obj) => obj[key] === value);

    console.log({ findObjInArr });

    // If the object was found, update the value of the specified key
    if (findObjInArr) {
      findObjInArr[keyToChange] = newValue;
    }

    // This works
    const newArr = [...arr];

    // This doesnt work
    // const newArr = arr;

    // Return the modified array
    return newArr;
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

                // When comparing the objects, they are for all intents and purposes identical (except for order)
                // Unless you move The Adventures of Tom Sawyer when they will be identical

                console.log({ newBooks });
                console.log({ newBooksOldMethod });

                // This method will cause a rerender
                // setBooks(newBooks);

                // This method will not cause a rerender
                setBooks(newBooksOldMethod);
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
