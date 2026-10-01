import {useState} from "react"
import TaskForm  from "./components/TaskForm"
import TaskList from  "./components/TaskList"
import "./TaskManager.css"

export default function TaskManager(){
  const [tasks,  setTasks] = useState([])

  function addTask(task){
    setTasks((prev)=> [...prev, task])
  
  }

  function handleDelete(id){
    setTasks((prevTask)=> prevTask.filter((item)=> item.id !== id))
  }
  return(
    <div className="manager-container">
      <h1>Task Manager</h1>
      <TaskForm onTask={addTask}/>
      <TaskList 
        newTask = {tasks}
        deleteTask = {handleDelete}
    
      />

    </div>

  )
}



