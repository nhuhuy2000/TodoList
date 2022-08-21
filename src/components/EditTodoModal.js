import React, { useState, useEffect } from "react";
import "./css/styles.scss";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "./Button";
import { useSelector, useDispatch } from "react-redux";
// import { editTodo } from "../redux-core/actions";
import { editTodo } from "../redux-toolkit/TodoSlice";
function EditTodoModal(props) {
  const { modal, todoEditId, handleClose } = props;

  const todoEdit = useSelector((state) => {
    return state.todo.todoList.find((todo) => todo.id === todoEditId);
  });

  const handleCloseModal = () => {
    handleClose();
  };

  const [state, setState] = useState({
    name: todoEdit.name,
    level: todoEdit.level,
    completed: todoEdit.completed,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTodo({ id: todoEditId, ...state }));
    const data = { id: todoEditId, state };
    dispatch(editTodo(data));
  };

  const handleChange = (e) => {
    if (e.target.name === "completed") {
      setState((prevState) => ({
        ...prevState,
        completed: e.target.checked,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  //   useEffect(() => {
  //     dispatch(editTodo(todoEditId));
  //   }, [todoEditId, dispatch]);
  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="container">
            <div className="closeButton" onClick={handleCloseModal}>
              <MdOutlineClose />
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="form__title">Sửa Todo</h1>
              <label htmlFor="name">
                Tên:
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={state.name}
                  name="name"
                />
              </label>
              <label htmlFor="level">
                Cấp độ:
                <select
                  onChange={handleChange}
                  value={state.level}
                  name="level"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <label htmlFor="complete">Hoàn thành:</label>
              <input
                id="inputCheckbox"
                type="checkbox"
                name="completed"
                checked={state.completed}
                onChange={handleChange}
              />
              <div className="form__button">
                <Button type="submit" className="btnAddTodo">
                  Sửa
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

export default EditTodoModal;
