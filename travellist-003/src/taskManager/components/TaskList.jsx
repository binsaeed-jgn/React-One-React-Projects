import TaskItem from  "./TaskItem"

export default function TaskList({newTask, deleteTask}){
  return(
    <div className="task-list">
      <ul>
      <li><h1>Task List Display</h1></li>
      {newTask.map((task)=>(
        <TaskItem 
          task={task} 
          key={task.id}
          deleteTask = {deleteTask}
        />

      ))}
    </ul>

    </div>
    
    

  
  )
  
}
