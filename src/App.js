import './App.css';

import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Stephan's To Do List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
