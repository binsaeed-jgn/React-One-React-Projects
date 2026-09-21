import Photo from "./components/Photo"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import "./Profile.css"
function Profile(){
  return(
    <div className="profile-card">
      <Photo />
      <Bio />
      <div className="skill-container">
      
        <Skills 
          skillName = "JavaScript"
          photoName = "skill-icon/js.png"
          color = "orange"
          
        />

        <Skills 
          skillName = "AI Engineer"
          photoName = "skill-icon/ai.png"
          color= "yellow"
        />

        <Skills 
          skillName = "Python"
          photoName = "skill-icon/py.png"
          color = "red"
        />

        <Skills 
          skillName = "Leadership"
          photoName = "skill-icon/leader.png"
          color= "green"
        />

      </div>
      

    </div>
  )
}
export default Profile;
