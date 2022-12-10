export const Book = ({ book, books, setBooks }) => {
  console.log({ books });
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
              onChange={(event) => {
                console.log(event.target.value);
                console.log(
                  setBooks(
                    modifyObjectInArray(
                      books,
                      "title",
                      book.title,
                      "row",
                      event.target.value
                    )
                  )
                );
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

function modifyObjectInArray(arr, key, value, keyToChange, newValue) {
  // Find the object in the array that has the specified key and value
  let obj = arr.find((obj) => obj[key] === value);

  // If the object was found, update the value of the specified key
  if (obj) {
    obj[keyToChange] = newValue;
  }

  // Return the modified array
  return arr;
}
