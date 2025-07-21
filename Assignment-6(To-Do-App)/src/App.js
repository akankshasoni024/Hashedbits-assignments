import './App.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    if (task.trim() === '') return;
    setTodoList([...todoList, task]);
    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input 
          id='task-input' 
          placeholder='Enter a task to add in your To Do list'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id='submit-btn' onClick={handleSubmit}>Submit</button>

        <ul id='todo-list'>
          {todoList.map((item, index) => (
            <li key={index}>
              {item}
              <button id='delete-btn' onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
