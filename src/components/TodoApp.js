import React from "react";
import TodoList from "./TodoList";
import FABComponent from "./FABComponent";
import AddNewTodo from "./AddNewTodo";
import EditTodo from "./EditTodo";
import VisibilityFilters from "./VisibilityFilters";

export default function TodoApp() {
  
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState(null);

  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenOnCardClick = (title, desc, completed, key) => {
    console.log(title, desc, completed, key);
    setCard({cardTitle: title, cardDesc: desc, cardCompleted: completed, cardId: key});
    handleEditOpen();
    //open new modal, pass it all the state
    // on save click, run that action EDIT_TODO
    
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <VisibilityFilters />
      <TodoList onCardClick={handleOpenOnCardClick} />
      <FABComponent onClick={handleOpen}  />
      <AddNewTodo onClose={handleClose} open={open}/>
      { card && 
        <EditTodo open={editOpen} onClose={handleEditClose} card={card}/>
      }
    </div>
  );
}
