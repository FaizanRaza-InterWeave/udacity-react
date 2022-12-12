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

    const updatedBooks = addBookToBooks(books, book, event);
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
