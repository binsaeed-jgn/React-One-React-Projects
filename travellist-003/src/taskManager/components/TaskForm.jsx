import {useState} from "react"

export default function TaskForm({onTask}){
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner")

  function handleSubmit(e){
    e.preventDefault();

    const newTask = {
      name, 
      level,
      done: false,
      id: Date.now()
    }

    onTask(newTask);
    setName("");
    setLevel("");
  }

  return(
    <form className="task-from" onSubmit={handleSubmit}>
      <h1>Record your Task</h1>
      <div className="form-input">
        <select
          value= {level}
          onChange = {(e)=> setLevel(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input type="text"
          placeholder="Enter your task"
          value={name}
          onChange = {(e)=>setName(e.target.value)}
        />
        
        <button type="submit">ADD TASK</button>
      </div>
      

    </form>
  )
}



