import React from "react";
import { FaSearch } from "react-icons/fa";
// import { searchTodo } from "../redux-core/actions";
import { useDispatch } from "react-redux";
import { todoSlice } from "../redux-toolkit/TodoSlice";
function SearchBar() {
  const [keyword, setKeyword] = React.useState("");
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(todoSlice.actions.SEARCH_TODO(keyword));
  };
  return (
    <div className="search">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        name="search"
      />
      <button onClick={handleOnClick}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
