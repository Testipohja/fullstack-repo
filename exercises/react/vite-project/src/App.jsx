import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Tasks from './components/tasks'
import Addtask from './components/addtask'
import { object } from 'prop-types'

function App() {
const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Aaaa",
    day: "5.2.2025",
    reminder: true,
  },
  {
    id: 2,
    text: "Bbbb",
    day: "6.2.2025",
    reminder: true,
  },
  {
    id: 3,
    text: "Cccc",
    day: "7.2.2025",
    reminder: false,
  },
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task, reminder:
      !task.reminder
    }: task)
  )
}

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&<Addtask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: "No tasks"}
    </div>
  )
}

export default App
