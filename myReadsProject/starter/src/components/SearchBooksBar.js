import { Link } from "react-router-dom";
import { search } from "../api/BooksAPI";
import { debounce } from "lodash";

export const SearchBooksBar = ({
  searchTerm,
  setSearchTerm,
  setSearchedBooks,
}) => {
  const searchBooks = debounce(async (searchString) => {
    const searchedBooks = await search(searchString);

    // Handle errors and empty arrays
    if (!searchedBooks || searchedBooks.error) {
      setSearchedBooks([]);
    } else {
      setSearchedBooks(searchedBooks);
    }
  }, 500);
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/"></Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            if (event.target.value) {
              searchBooks(event.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};
