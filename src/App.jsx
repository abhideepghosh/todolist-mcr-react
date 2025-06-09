import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() === '') {
      return;
    }
    setTasks((tasks) => [...tasks, inputValue]);
    setInputValue('');
  }

  const editTask = (currentTask, i) => {
    const newTask = prompt('Edit task:', currentTask);
    if (newTask !== null && newTask.trim() !== '') {
      setTasks(tasks.map((task, idx) => idx === i ? newTask : task));
    }
  }

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  }

  return (
    <>
      <div className='main-container'>
        <header>
          <form onSubmit={formSubmit}>
            <h1>ToDo List</h1>
            <input className='add-task' type='text' placeholder='Add a new task' value={inputValue} onChange={handleInput}/>
          </form>
        </header>
        <main>
        <ul className='task-list'>
          {tasks && tasks.map((currentTask, i) => {
            return (
              <li key={i}>
              <span className='task-text'>{currentTask}</span>
              <button
                className='edit-task'
                onClick={() =>{editTask(currentTask, i)}}
              >
                Edit
              </button>
              <button
                className='delete-task'
                onClick={() => {deleteTask(i)}}
              >
                Delete
              </button>
              </li>
            )
          })}
        </ul>
        </main>
      </div>

    </>
  )
}

export default App;
