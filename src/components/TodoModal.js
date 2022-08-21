import React, { useState } from "react";
import "./css/styles.scss";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
// import { addTodo } from "../redux-core/actions";
import { todoSlice } from "../redux-toolkit/TodoSlice";
import axios from "axios";
import { saveTodo } from "../redux-toolkit/TodoSlice";
function TodoModal(props) {
  const { modal, handleToggleShow } = props;
  const handleCloseModal = () => {
    handleToggleShow();
  };
  const [name, setName] = useState("");
  const [level, setLevel] = useState("easy");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveTodo({
        id: newId,
        name: name,
        completed: false,
        level: level,
      })
    );
    setName("");
    setLevel("Easy");
  };
  const todoList = useSelector((state) => {
    return state.todo.todoList;
  });
  let newId = todoList.length + 1;
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "level") {
      setLevel(e.target.value);
    }
  };
  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="container">
            <div className="closeButton" onClick={handleCloseModal}>
              <MdOutlineClose />
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="form__title">Thêm Todo</h1>
              <label htmlFor="title">
                Tên
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={name}
                  name="name"
                />
              </label>
              <label htmlFor="level">
                Cấp độ
                <select onChange={handleChange} name="level" id="status">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <div className="form__button">
                <Button type="submit" className="btnAddTodo">
                  Add Todo
                </Button>
                <Button
                  type=""
                  className="btnCancel"
                  handleClick={handleCloseModal}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoModal;
