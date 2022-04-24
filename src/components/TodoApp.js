import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FABComponent from "./FABComponent";
import AddNewTodo from "./AddNewTodo";
import VisibilityFilters from "./VisibilityFilters";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <VisibilityFilters />
      <TodoList />
      <FABComponent />
      <AddNewTodo />
    </div>
  );
}
