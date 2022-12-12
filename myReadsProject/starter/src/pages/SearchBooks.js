import { Book } from "../components/Book";
import { useState } from "react";
import { SearchBooksBar } from "../components/SearchBooksBar";
import { SearchBooksResults } from "../components/SearchBooksResults";

export const SearchBooks = ({
  bookshelfBooks,
  setBooks,
  updateBookToBookShelf,
}) => {
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
        bookshelfBooks={bookshelfBooks}
        setBooks={setBooks}
        updateBookToBookShelf={updateBookToBookShelf}
      />
    </div>
  );
};
