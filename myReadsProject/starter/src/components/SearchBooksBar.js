import { Link } from "react-router-dom";
import { search } from "../api/BooksAPI";

export const SearchBooksBar = ({
  searchTerm,
  setSearchTerm,
  setSearchedBooks,
}) => {
  const searchBooks = async (searchString) => {
    console.log(`searching for ${searchString}`);
    const searchedBooks = await search(searchString);
    console.log({ searchedBooks });
    if (!searchedBooks || searchedBooks.error) {
      setSearchedBooks([]);
    } else {
      setSearchedBooks(searchedBooks);
    }
  };
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
            searchBooks(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
