"use client"
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterProps {
  texts: string[];
  speed: number;
  delay: number;
}

const Typewriter = ({ texts, speed, delay }: TypewriterProps) => {
  const displayText = useTypewriter(texts, speed, delay);

  return <span className="typewriter">{displayText}</span>;
};

export default Typewriter;
