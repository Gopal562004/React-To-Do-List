import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todoName: "Eat Food",
      todoDate: "01/05/2023",
    },
    {
      todoName: "Sleep",
      todoDate: "01/05/2023",
    }
  ]);

  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  };
  return (
    <>
      <center className="to-do-container ">
        <AppName />
        <AddTodo addTodo={addTodo} />
        <TodoList todoItems={todoItems} deleteTodo={deleteTodo}/>
      </center>
    </>
  );
}

export default App;
