import Card from "./component/Card"
import "./Card.css"

const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build interactive user interfaces.",
  },
  {
    id: 2,
    question: "What is a React component?",
    answer:
      "A component is a reusable piece of UI that returns React elements.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that allows you to write HTML-like markup inside JavaScript.",
  },
  {
    id: 4,
    question: "What are props in React?",
    answer:
      "Props are read-only inputs passed from a parent component to a child component.",
  },
  {
    id: 5,
    question: "What is state in React?",
    answer:
      "State is data managed by a component that can change over time and trigger a re-render.",
  },
  {
    id: 6,
    question: "What is the useState hook?",
    answer:
      "useState is a React Hook that lets a component add and manage state.",
  },
  {
    id: 7,
    question: "What is the purpose of useEffect?",
    answer:
      "useEffect lets you synchronize a component with external systems, such as APIs or browser events.",
  },
  {
    id: 8,
    question: "What is conditional rendering?",
    answer:
      "Conditional rendering means displaying different UI elements depending on a condition.",
  },
  {
    id: 9,
    question: "What is the purpose of the key prop?",
    answer:
      "The key prop helps React identify items in a list when items are added, removed, or reordered.",
  },
  {
    id: 10,
    question: "What is a controlled component?",
    answer:
      "A controlled component is a form element whose value is managed by React state.",
  },
];

export default function Main(){
  return (
    <div className="cards-container">
      {questions.map((card)=>(
        <Card card = {card} key={card.id}/>
        
      ))}
      

    </div>
  )
  
}
