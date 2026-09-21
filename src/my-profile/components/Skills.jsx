
function Skills(props){
  return(
    <div className="skills" style={{backgroundColor: props.color}}> 
      <h3>{props.skillName}</h3>
      <img src={props.photoName} alt={props.skillName} />

    </div>
  )
}

export default Skills;
