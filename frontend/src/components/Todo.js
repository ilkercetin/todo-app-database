import React from "react";
import axios from "axios";
import { API_BASE } from "../enums/ApiEnums";

function Todo({
  key,
  text,
  setTodos,
  todos,
  todo,
  setTodoTooltip,
  setInfoText,
}) {
  const deleteHandler = async () => {
    const response = await axios.delete(API_BASE + "/todo/delete/" + todo._id);
    const updatedTodos = todos.filter((todo) => {
      return todo._id !== response.data._id;
    });

    setTodos(updatedTodos);
    setInfoText("Task is deleted!");

        setTimeout(() => {
          setInfoText("");
        }, 3000);
  };

  const completeHandler = async () => {
    const response = await axios.put(API_BASE + "/todo/complete/" + todo._id);
    const updatedTodos = todos.map((todo) => {
      if (todo._id === response.data._id) {
        todo.complete = response.data.complete;

        setInfoText("Task is " + (todo.complete ? 'completed!' : 'not completed!'));

        setTimeout(() => {
          setInfoText("");
        }, 3000);
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const hoverHandler = () => {
    setTodoTooltip(todo.text);
  };

  const unhoverHandler = () => {
    setTodoTooltip("");
  };

  return (
    <div className="todo" key={key}>
      <li
        className={`todo-item ${todo.complete ? "completed" : ""}`}
        onMouseEnter={hoverHandler}
        onMouseLeave={unhoverHandler}
      >
        {text.slice(0, 30)}
        {text.length > 30 ? "..." : ""}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className={`fas ${todo.complete ? "fa-undo-alt" : "fa-check"}`}></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
