export default function TaskItem({task, deleteTask}){
  return(
      <li>
        <p>
          <span>Taks: {task.name} | level: {task.level}</span> 
          <button className="delete-btn" 
          onClick = {()=> deleteTask(task.id)}
          >X</button>
        </p>  
      
      </li>


    
  )
  
}
