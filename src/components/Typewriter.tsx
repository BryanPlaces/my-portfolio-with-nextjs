"use client"
import { useTypewriter } from "@/hooks/useTypewriter";

const Typewriter = ({ texts, speed, delay }) => {
  const displayText = useTypewriter(texts, speed, delay);

  return <span className="typewriter">{displayText}</span>;
};

export default Typewriter;
