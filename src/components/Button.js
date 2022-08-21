import React from "react";
import "./css/styles.scss";
import { useDispatch } from "react-redux";
// const Btn = styled.button`
//   @include btn-style;
//   background-color: #63ace5;
//   color: white;
//   &:hover {
//     background-color: #4b86b4;
//   }
// `;
import { todoSlice } from "../redux-toolkit/TodoSlice";
export function Button({ type, children, className, handleClick }) {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export function SelectBtn({ children }) {
  const [filter, setFilter] = React.useState("all");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch(todoSlice.actions.FILTER_TODO(e.target.value));
  };
  return (
    <select
      className="selectBtn"
      value={filter}
      onChange={(e) => handleChange(e)}
    >
      <option value="all">ALL</option>
      <option value="incompleted">Incompleted</option>
      <option value="completed">Completed</option>
    </select>
  );
}
