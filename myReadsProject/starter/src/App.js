import "./App.css";
import { useState, useEffect } from "react";
import { SearchBooks } from "./pages/SearchBooks";
import { BookShelf } from "./pages/Bookshelf";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";
import { update } from "./api/BooksAPI";

function App() {
  const [bookshelfBooks, setBooks] = useState([]);

  useEffect(() => {
    const getAllAddedBooks = async () => {
      const allAddedBooks = await getAll();
      setBooks(allAddedBooks);
      console.log(allAddedBooks);
    };

    getAllAddedBooks();
  }, []);

  const updateBookToBookShelf = async (book, event, books) => {
    console.log({
      updateBookToBookShelf: {
        book: book,
        event: event,
        books: books,
      },
    });
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

    function addBookToBooks(arr, book, event) {
      // Remove book from array
      const filteredBooks = arr.filter((bookItem) => bookItem.id !== book.id);
      book["shelf"] = event.target.value;
      const updatedBooks = filteredBooks.concat(book);
      console.log({ updatedBooks });

      return updatedBooks;
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

    const updatedBooks = addBookToBooks(books, book, event);

    console.log({ newBooks });
    setBooks(updatedBooks);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BookShelf
              bookshelfBooks={bookshelfBooks}
              setBooks={setBooks}
              updateBookToBookShelf={updateBookToBookShelf}
            />
          }
        />
        <Route
          path="/search-books"
          element={
            <SearchBooks
              bookshelfBooks={bookshelfBooks}
              setBooks={setBooks}
              updateBookToBookShelf={updateBookToBookShelf}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
