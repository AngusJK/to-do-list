import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDo text={todo.text}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList