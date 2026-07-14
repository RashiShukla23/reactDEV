import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "makeup", done: false },
    { id: 2, text: "sleep", done: false },
    { id: 3, text: "drink water", done: false },
  ])

  const [newTask, setNewTask] = useState("")

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleAdd() {
    if (newTask.trim() === "") return
    const newTaskObj = { id: Date.now(), text: newTask, done: false }
    setTasks([...tasks, newTaskObj])
    setNewTask("")
  }

  function handleToggle(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd()
  }

  const doneCount = tasks.filter((t) => t.done).length

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FBEFE6",
      display: "flex",
      justifyContent: "center",
      padding: "60px 20px",
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      <div style={{
        width: "420px",
        background: "#FFFDF9",
        borderRadius: "28px",
        padding: "36px 32px",
        boxShadow: "0 20px 50px rgba(200, 160, 150, 0.25)",
        border: "3px solid #F6D9CE"
      }}>
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <p style={{
            margin: 0,
            fontSize: "13px",
            letterSpacing: "2px",
            color: "#D89AA6",
            fontWeight: 700,
            textTransform: "uppercase"
          }}>
            today's little list
          </p>
          <h1 style={{
            margin: "4px 0 0",
            fontSize: "34px",
            color: "#5B3E4B",
            fontFamily: "Georgia, serif",
            fontWeight: 400
          }}>
            My To-Dos 🍡
          </h1>
          <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#B08A96" }}>
            {doneCount} of {tasks.length} done — you got this
          </p>
        </div>

        {/* Input row */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "26px" }}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="add something sweet to do..."
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "14px",
              border: "2px solid #F0DCD3",
              outline: "none",
              fontSize: "14px",
              color: "#5B3E4B",
              background: "#FFF9F4"
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "0 20px",
              borderRadius: "14px",
              border: "none",
              background: "#F2A6B3",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>

        {/* Task list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {tasks.length === 0 && (
            <p style={{ color: "#C9AEB6", fontSize: "14px", textAlign: "center", padding: "20px 0" }}>
              nothing here yet — add your first task ✿
            </p>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "16px",
                background: task.done ? "#F4EDE3" : "#FDF3EE",
                border: `2px solid ${task.done ? "#E7DED2" : "#F6DFE2"}`,
                transition: "all 0.15s ease"
              }}
            >
              <button
                onClick={() => handleToggle(task.id)}
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: `2px solid ${task.done ? "#C7A98F" : "#F2A6B3"}`,
                  background: task.done ? "#C7A98F" : "transparent",
                  cursor: "pointer",
                  flexShrink: 0
                }}
              />

              <span style={{
                flex: 1,
                fontSize: "15px",
                color: task.done ? "#B7A89C" : "#5B3E4B",
                textDecoration: task.done ? "line-through" : "none"
              }}>
                {task.text}
              </span>

              <button
                onClick={() => handleDelete(task.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#D9A3AE",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App