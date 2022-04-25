import React from "react";
import TodoList from "./TodoList";
import FABComponent from "./FABComponent";
import AddNewTodo from "./AddNewTodo";
import EditTodo from "./EditTodo";
import VisibilityFilters from "./VisibilityFilters";
import { useDispatch } from "react-redux";

export default function TodoApp() {
  
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState(null);

  const [editOpen, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => {
    setEditOpen(false);
    setCard(null);
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenOnCardClick = (title, description, completed, key) => {
    setCard({cardTitle: title, cardDesc: description, cardCompleted: completed, cardId: key});
    handleEditOpen();
  }

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    async function fetchTodoData() {
      let resp = await fetch('https://todos-prad-default-rtdb.asia-southeast1.firebasedatabase.app/todoItems.json');
      resp = await resp.json();
      dispatch({ type: 'SET_TODO', payload: { todos: resp } });
      setLoading(false);
    }

    fetchTodoData();

  }, [])
  

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      {loading ? "LOADING....." : <>
        <VisibilityFilters />
        <TodoList onCardClick={handleOpenOnCardClick} />
        <FABComponent onClick={handleOpen}  />
        <AddNewTodo onClose={handleClose} open={open}/>
        { card && 
          <EditTodo open={editOpen} onClose={handleEditClose} card={card}/>
        }
      </>}
    </div>
  );
}
