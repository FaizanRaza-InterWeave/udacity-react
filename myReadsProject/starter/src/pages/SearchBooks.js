import { Book } from "../components/Book";
import { useState } from "react";
import { SearchBooksBar } from "../components/SearchBooksBar";
import { SearchBooksResults } from "../components/SearchBooksResults";

export const SearchBooks = ({ books, setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchedBooks, setSearchedBooks] = useState([]);

  return (
    <div className="search-books">
      <SearchBooksBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchedBooks={setSearchedBooks}
      />
      <SearchBooksResults
        searchedBooks={searchedBooks}
        books={books}
        setBooks={setBooks}
      />
    </div>
  );
};
