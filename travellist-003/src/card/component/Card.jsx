
import { useState } from "react";

export default function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped((prev) => !prev);
  }

  return (
    <div
      className={`card ${isFlipped ? "select" : ""}`}
      onClick={handleClick}
    >
      {isFlipped ? card.answer : card.question}
    </div>
  );
}
