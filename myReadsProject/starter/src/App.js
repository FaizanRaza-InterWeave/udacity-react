import "./App.css";
import { useState, useEffect } from "react";
import { SearchBooks } from "./pages/SearchBooks";
import { BookShelf } from "./pages/Bookshelf";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";

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

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<BookShelf books={books} setBooks={setBooks} />}
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
