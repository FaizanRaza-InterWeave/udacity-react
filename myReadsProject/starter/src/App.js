import "./App.css";
import { useState } from "react";
import { SearchBooks } from "./pages/SearchBooks";
import { BookShelf } from "./pages/Bookshelf";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BookShelf
              setShowSearchpage={setShowSearchpage}
              showSearchPage={showSearchPage}
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
