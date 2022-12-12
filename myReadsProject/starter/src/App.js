import "./App.css";
import { useState, useEffect } from "react";
import { SearchBooks } from "./pages/SearchBooks";
import { BookShelf } from "./pages/Bookshelf";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      console.log("Calling GetAll");

      const response = await getAll();
      setBooks(response);
      console.log(response);
    };

    getAllBooks();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BookShelf
              setShowSearchpage={setShowSearchpage}
              showSearchPage={showSearchPage}
              books={books}
              setBooks={setBooks}
            />
          }
        />
        <Route
          path="/search-books"
          element={
            <SearchBooks
              setShowSearchpage={setShowSearchpage}
              showSearchPage={showSearchPage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
