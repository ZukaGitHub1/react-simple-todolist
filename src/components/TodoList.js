import React from "react";

import { todo } from "./Todo";


function Todo({ todo, index, handleClick }) {
  return (
    <div onClick={() => handleClick(index)}
      className="todo"
      style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
     <h3> {todo.todo}</h3>
    </div>
  );
}



 

function Aapp() {
  const [todos, setTodos] = React.useState(todo);

 

  const handleClick = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };
 

  return (
    <div className="app">
      <div className="todo-list"> 
      <button onClick={() => setTodos([])}> clear all</button>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleClick={handleClick} />
      
        ))}
        
      </div>
    </div>
  );
}

export default Aapp;