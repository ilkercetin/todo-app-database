import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { API_BASE } from "./enums/ApiEnums";
import axios from "axios";
import Tooltip from "./components/Tooltip";
import NotificationPopup from "./components/NotificationPopup";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoTooltip, setTodoTooltip] = useState("");
  const [infoText, setInfoText] = useState("");

  useEffect(() => {
    getTodos();
  }, [todos]);

  const getTodos = async () => {
    const response = await axios.get(API_BASE + "/todos");

    setTodos(response.data);
    filterHandler();
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>İlker Çetin's To Do App</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        setInfoText={setInfoText}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setTodoTooltip={setTodoTooltip}
        setInfoText={setInfoText}
      />
      {todoTooltip.length > 0 && <Tooltip text={todoTooltip} />}
      {infoText.length > 0 && <NotificationPopup text={infoText} />}
    </div>
  );
}

export default App;
