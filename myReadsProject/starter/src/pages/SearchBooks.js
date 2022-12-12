import { Link } from "react-router-dom";
import { Book } from "../components/Book";
import { useState } from "react";
import { SearchBooksBar } from "../components/SearchBooksBar";
import { useEffect } from "react";
import { search } from "../api/BooksAPI";

export const SearchBooks = ({ books, setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const booksToDisplay = books.filter(
    (book) =>
      book.title.includes(searchTerm) ||
      arrayContainsSubstring(book.authors, searchTerm) ||
      arrayOfObjectsContainsSubstring(book.industryIdentifiers, searchTerm)
  );

  const [searchedBooks, setSearchedBooks] = useState([]);

  return (
    <div className="search-books">
      <SearchBooksBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchedBooks={setSearchedBooks}
      />
      <div className="search-books-results">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <Book
                book={book}
                books={books}
                setBooks={setBooks}
                key={book.id}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

// Generated by ChatGPT
function arrayContainsSubstring(arr, substring) {
  // Iterate over the array of strings
  for (let str of arr) {
    // Check if the current string contains the substring
    if (str.indexOf(substring) >= 0) {
      // If it does, return true
      return true;
    }
  }

  // If none of the strings contain the substring, return false
  return false;
}

// Generated by ChatGPT
function arrayOfObjectsContainsSubstring(arr, substring) {
  // Iterate over the array of objects
  for (let obj of arr) {
    // Iterate over the values in each object
    for (let value of Object.values(obj)) {
      // Check if the current value is a string and contains the substring
      if (typeof value === "string" && value.indexOf(substring) >= 0) {
        // If it does, return true
        return true;
      }
    }
  }

  // If none of the values contain the substring, return false
  return false;
}
