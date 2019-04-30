import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      inCompleted: false
    },
    {
      text: "Meet friend for lunch",
      inCompleted: false
    },
    {
      text: "Build really cool todo app",
      inCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
