import Photo from "./components/Photo"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import "./Profile.css"

const skills = [
  {
    name: "JavaScript",
    level: "Intermediate",
    color: "orange"
  },
  {
    name: "React",
    level: "Beginner",
    color: "blue"
  },
  {
    name: "HTML",
    level: "Intermediate",
    color: "orangered"
  },
  {
    name: "CSS",
    level: "Beginner",
    color: "purple"
  },
  {
    name: "Vue.js",
    level: "Beginner",
    color: "green"
  },
  {
    name: "TypeScript",
    level: "Beginner",
    color: "blue"
  },
  {
    name: "Git & GitHub",
    level: "Beginner",
    color: "grey"
  },
  {
    name: "Java",
    level: "Beginner",
    color: "brown"
  },
  {
    name: "C++",
    level: "Beginner",
    color: "royalblue"
  },
  {
    name: "Python",
    level: "Beginner",
    color: "yellow"
  },
  {
    name: "UI/UX Design",
    level: "Beginner",
    color: "pink"
  },
  {
    name: "Database Management",
    level: "Beginner",
    color: "teal"
  },
  {
    name: "Software Engineering",
    level: "Intermediate",
    color: "darkslateblue"
  },
  {
    name: "Business Development",
    level: "Intermediate",
    color: "gold"
  },
  {
    name: "Leadership",
    level: "Intermediate",
    color: "darkgreen"
  },
  {
    name: "Research",
    level: "Intermediate",
    color: "silver"
  }
];

console.log(skills)

function Profile(){
  return(
    <div className="profile-card">
      <Photo />
      <Bio />
      <div className="skill-container">

        {skills.map((skill)=>(
          <Skills

            skillsObj = {skill}
            /* skillName = {skill.name}
            color = {skill.color}
            level = {skill.level} */
          />
        ))}
      
        {/* <Skills 
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
        /> */}

      {/*   <Skills 
          skillName = "Leadership"
          photoName = "skill-icon/leader.png"
          color= "green"
        /> */}

      </div>
      

    </div>
  )
}
export default Profile;
