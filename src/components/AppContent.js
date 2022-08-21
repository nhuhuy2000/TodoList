import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
// import { fetchData } from "../redux-core/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Pagination from "./Pagination";
import { todoSlice, fetchTodos } from "../redux-toolkit/TodoSlice";
function AppContent() {
  const todoList = useSelector((state) => {
    return state.todo.todoList;
  });
  const filters = useSelector((state) => {
    return state.todo.filters;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    // fetchDataAPI();

    dispatch(fetchTodos(filters));
  }, [filters]);
  // const fetchDataAPI = async () => {
  //   // dispatch(todoSlice.actions.FETCH_DATA(search, filter));// sync
  //   //theo thunk
  // };
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage] = useState(5);
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodo = todoList.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPagesNum = Math.ceil(todoList.length / todoPerPage);
  return (
    <div>
      {currentTodo.map(({ id, name, completed, level }) => {
        return (
          <TodoItem
            key={id}
            id={id}
            name={name}
            completed={completed}
            level={level}
          />
        );
      })}
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default AppContent;
