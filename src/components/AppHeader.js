import React, { useState } from "react";
import { Button, SelectBtn } from "./Button";
import SearchBar from "./SearchBar";
import TodoModal from "./TodoModal";

function AppHeader() {
  const [modal, setModal] = useState(false);
  // const handleOpen = () => {
  //   setModalOpen(true);
  // };

  return (
    <div className="header">
      <Button className="btnAddTodo" handleClick={() => setModal(true)}>
        Add Todo
      </Button>
      <SearchBar />
      <SelectBtn></SelectBtn>
      <TodoModal modal={modal} handleToggleShow={() => setModal(false)} />
    </div>
  );
}

export default AppHeader;
