import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      addTodo({
        todoName,
        todoDate,
      });
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <div className="container text-center">
      <div className="row gg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="todo-name"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="todo-date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success gg-button"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
