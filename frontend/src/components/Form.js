import axios from "axios";
import React from "react";
import { API_BASE } from "../enums/ApiEnums";

function Form({ inputText, setInputText, todos, setTodos, status, setStatus, setInfoText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(API_BASE + '/todo/new', {
      text: inputText
    });

    setTodos([
      ...todos,
      response.data
    ]);

    setInputText("");
    setInfoText("New todo is saved!");

    setTimeout(() => {
      setInfoText('');
    }, 3000);
  };

  const filterChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={filterChangeHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
