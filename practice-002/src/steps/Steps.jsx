import {useState} from 'react'


function Steps(){
  const msg = [
    "Learn React",
    "Apply for jobs",
    "Invest your new income"
  ]

  const [step, setStep] = useState(1);
  const [isOpen,setIsOpen] = useState(true)

  //setIsOpen(!isOpen)
  function handlePrev(){
    if (step > 1) {
       setStep((step)=> step -1)
      }
  
  }

    function handleNext(){
      if (step<3) {
        setStep((step)=> step +1)
       
      }
  }
  return (
    <>  
      <button className="close" 
        onClick={ () => setIsOpen((isOpen)=> !isOpen)}
      >&times;</button>
      {isOpen && (
        <div className="container">
          <div className="numbers">
            <div className={`step ${step>=1 ? "active" : ""}`}>1</div>
            <div className={`step ${step>=2 ? "active" : ""}`}>2</div>
            <div className={`step ${step>=3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">Step {step} {msg[step-1]}</div>
          <div className="buttons">
            <button className="btn"
              onClick = {handlePrev}
            >Previous</button>
            <button className="btn"
              onClick={handleNext}
            >Next</button>
          </div>
        </div>
    )}
    </>
  )
  
}

export default Steps;
