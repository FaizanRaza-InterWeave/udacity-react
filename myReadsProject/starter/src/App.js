import "./App.css";
import { useState, useEffect } from "react";
import { SearchBooks } from "./pages/SearchBooks";
import { BookShelf } from "./pages/Bookshelf";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";
import { update } from "./api/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllAddedBooks = async () => {
      const allAddedBooks = await getAll();
      setBooks(allAddedBooks);
      console.log(allAddedBooks);
    };

    getAllAddedBooks();
  }, []);

  const updateBookToBookShelf = async (book, event) => {
    function modifyObjectInArray(arr, key, value, keyToChange, newValue) {
      // Find the object in the array that has the specified key and value
      let obj = arr.find((obj) => obj[key] === value);

      // If the object was found, update the value of the specified key
      if (obj) {
        obj[keyToChange] = newValue;
      }

      // Return a new array to trigger rerender
      const newArr = [...arr];

      return newArr;
    }

    event.preventDefault();
    update(book, event.target.value);

    const newBooks = modifyObjectInArray(
      books,
      "title",
      book.title,
      "shelf",
      event.target.value
    );
    setBooks(newBooks);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BookShelf
              books={books}
              setBooks={setBooks}
              updateBookToBookShelf={updateBookToBookShelf}
            />
          }
        />
        <Route
          path="/search-books"
          element={<SearchBooks books={books} setBooks={setBooks} />}
        />
      </Routes>
    </>
  );
}

export default App;
