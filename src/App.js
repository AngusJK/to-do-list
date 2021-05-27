import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Gretchen's To Do List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
