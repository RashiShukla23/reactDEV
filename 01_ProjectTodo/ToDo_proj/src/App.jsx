import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "makeup" },
    { id: 2, text: "sleep" },
    { id: 3, text: "drink" },
  ])

  const [newTask, setNewTask] = useState("")

  function handleDelete(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  function handleAdd() {
    const newTaskObj = { id: Date.now(), text: newTask }
    setTasks([...tasks, newTaskObj])
    setNewTask("")
  }

  return (
    <div>
      <h1>My To Dos for today</h1>

      <input 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        style={{border: "2px solid white", color: "white", padding: "8px"}}
      />
      <button onClick={handleAdd}>Add new task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App