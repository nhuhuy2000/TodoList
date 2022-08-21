import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { removeTodo } from "../redux-core/actions";
import EditTodoModal from "./EditTodoModal";
import { deleteTodo } from "../redux-toolkit/TodoSlice";
function TodoItem(props) {
  const { id, name, completed, level } = props;
  const dispatch = useDispatch();
  //
  const { filters } = useSelector((state) => state.todo);
  const { filter, search } = filters;

  const handleRemoveTodo = () => {
    const data = { id, filter, search };
    dispatch(deleteTodo(data));
  };
  const [modal, setModal] = useState(false);
  const [todoEditId, setTodoEditId] = useState(id);
  const handleEdit = () => {
    // setTodoEditId(id);
    setModal(true);
  };

  return (
    <div className="item">
      <div className="item__detail">
        <div className="item__text">
          <p className="todo__text">{completed ? <del>{name}</del> : name}</p>
          <div className={`todo__level--${level}`}>{level}</div>
        </div>
      </div>
      <div className="action">
        {!completed ? (
          <div id={id} onClick={() => handleEdit()} className="action__icon">
            <MdEdit />
          </div>
        ) : (
          <span className="span--success">✓</span>
        )}
        <div onClick={handleRemoveTodo} className="action__icon">
          <MdDelete />
        </div>
      </div>
      <EditTodoModal
        todoEditId={todoEditId}
        modal={modal}
        handleClose={() => setModal(false)}
      />
    </div>
  );
}

export default TodoItem;
