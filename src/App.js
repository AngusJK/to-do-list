import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  return (
    <div className="App">
      <header>
        <h1>Gretchen's To Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
