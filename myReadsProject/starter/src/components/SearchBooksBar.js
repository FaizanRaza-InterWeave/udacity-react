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
      console.log("returning empty array");
      setSearchedBooks([]);
    } else {
      console.log("returning array");

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
            if (event.target.value) {
              searchBooks(event.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};
