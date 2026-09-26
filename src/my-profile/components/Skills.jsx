

function Skills({skillsObj}){
  return(
    <div className={`skills ${skillsObj.level.Beginner ? "beginner":"intermediate"} `} style={{backgroundColor: skillsObj.color}}> 
      <h3>{skillsObj.name}</h3>
      <span>
        {skillsObj.level === "Intermediate" && '🔰'}
        {skillsObj.level === "Beginner" && '🥈'}
      </span>
  
    {/*   <img src={props.photoName} alt={props.skillName} /> */}

    </div>
  )
}

export default Skills;
