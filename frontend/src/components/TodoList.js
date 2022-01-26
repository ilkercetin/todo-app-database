import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos, setTodoTooltip, setInfoText }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              key={todo._id}
              text={todo.text}
              setTodos={setTodos}
              todo={todo}
              todos={todos}
              setTodoTooltip={setTodoTooltip}
              setInfoText={setInfoText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
